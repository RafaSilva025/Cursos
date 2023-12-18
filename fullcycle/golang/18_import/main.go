package main

import ( 
	"fmt"
	"github.com/RafaSilva025/full_cycle/18/matematica"
	"github.com/google/uuid"
)

func main() {
	s := matematica.Soma(10, 20)
	fmt.Println("Resultado:", s)
	fmt.Println(uuid.New())
}

//importações / pacotes de fora


//tudo que está com letra Maiuscula está exportado
//tudo que está com letra Minuscula não está exportado