package main

import (
	"fmt"

	"github.com/RafaSilva025/api-go-rest/database"
	"github.com/RafaSilva025/api-go-rest/models"
	"github.com/RafaSilva025/api-go-rest/routes"
)

func main() {
	models.Personalidades = []models.Personalidade{
		{Id: 1, Nome: "Nome 1", Historia: "Historia 1"},
		{Id: 2, Nome: "Nome 2", Historia: "Historia 2"},
	}
	database.ConectaComBancoDeDados()
	fmt.Println("Iniciando o servidor Rest com Go")
	routes.HandleResquest()
}
