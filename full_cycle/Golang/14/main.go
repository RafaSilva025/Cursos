package main 

import "fmt"

type Cliente struct {
	nome string
}

func (c Cliente) andou(){
	c.nome = "Rafa Silva"
	fmt.Printf("O cliente %v andou\n", c.nome)
}

func main() {
	rafa := Cliente{
		nome: "Rafa",
	}
	rafa.andou()
	fmt.Printf("O valor da struct com nome %v", rafa.nome)
}