// - Esse exercício vai reforçar seus conhecimentos sobre conjuntos de métodos.
//     - Crie um tipo para um struct chamado "pessoa"
//     - Crie um método "falar" para este tipo que tenha um receiver ponteiro (*pessoa)
//     - Crie uma interface, "humanos", que seja implementada por tipos com o método "falar"
//     - Crie uma função "dizerAlgumaCoisa" cujo parâmetro seja do tipo "humanos" e que chame o método "falar"
//     - Demonstre no seu código:
//         - Que você pode utilizar um valor do tipo "*pessoa" na função "dizerAlgumaCoisa"
//         - Que você não pode utilizar um valor do tipo "pessoa" na função "dizerAlgumaCoisa"
package main

import "fmt"

type pessoa struct {
    name string
    idade int
    fraseFav string
}

func (p *pessoa) falar() {
    fmt.Println(p.fraseFav)
}

type humanos interface{
    falar()
}

func dizerAlgumaCoisa(h humanos) {
    h.falar()   
}


func main() {

    fulano := pessoa{"fulano",55,"tem uma moeda ai senhor"}
    t := &fulano // t é um ponteiro para fulano dessa forma ele implementa a interface humanos pois falar() é um método de ponteiro

    dizerAlgumaCoisa(t) // funciona
    // dizerAlgumaCoisa(fulano) // não funciona
}