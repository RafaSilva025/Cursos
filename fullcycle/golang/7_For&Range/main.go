package main

import "fmt"

func main() {
	salarios := map[string]int{"Wesley": 1000, "João": 2000, "Miguel": 5000}
	fmt.Println(salarios["Miguel"])

	for nome, salario := range salarios {
		fmt.Printf("O salario de %s é %d\n", nome, salario)
	}

	for _, salario := range salarios {
		//quando tem o _ valor é ignorado
		fmt.Printf("O salario é %d\n", salario)
	}
}