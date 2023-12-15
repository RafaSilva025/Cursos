package main 

import "fmt"

type Endereco struct {
	Logradouro string
	Numero 	   int 
	Cidade 	   string
	Estado     string 
}

type Cliente struct {
	Nome   string
	Idade  int 
	Ativo  bool
	Endereco
	//Pode passar Endereço como um tipo
}

func (c Cliente) Desativar() {
	c.Ativo = false
	fmt.Printf("O cliente %s foi desativado", c.Nome)
}

func main() {
	wesley := Cliente{
		Nome: "Wesley", 
		Idade: 30,
		Ativo: true,
	}
	wesley.Ativo = false
	wesley.Desativar()

	wesley.Logradouro = "Rua 1"

	fmt.Printf("Nome: %s, Idade: %d, Ativo: %t", wesley.Nome, wesley.Idade, wesley.Ativo)
}