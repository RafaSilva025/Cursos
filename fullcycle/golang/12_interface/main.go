package main 

import "fmt"

type Endereco struct {
	Logradouro string
	Numero 	   int 
	Cidade 	   string
	Estado     string 
}

type Pessoa interface {
	Desativar()
}

type Empresa struct {
	Nome string
}

func (e Empresa) Desativar() {
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

func Desativacao( pessoa Pessoa) {
	pessoa.Desativar()
}
//Interface do Go permite passar, apenas metodos, nao pode passar Propriedades

func main() {
	wesley := Cliente{
		Nome: "Wesley", 
		Idade: 30,
		Ativo: true,
	}
	wesley.Ativo = false
	wesley.Desativar()

	

	Desativacao(wesley)

	wesley.Logradouro = "Rua 1"

	fmt.Printf("Nome: %s, Idade: %d, Ativo: %t", wesley.Nome, wesley.Idade, wesley.Ativo)
}