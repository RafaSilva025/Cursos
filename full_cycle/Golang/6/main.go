package main

import "fmt"

func main() {
	s := []int{2, 4, 6, 8, 10}
	//quando tem o "[]" vazio antes de uma var significa que é um SLICE
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)

	fmt.Printf("len=%d cap=%d %v\n", len(s[:0]), cap(s[:0]), s [:0])
	//depois do s[:0] tudo fica vazio(como se fosse dpois do s conte 0 valores)

	fmt.Printf("len=%d cap=%d %v\n", len(s[:4]), cap(s[:4]), s [:4])
	//se o : vier antes do numero, ai vem os 4 numeros anteriores

	fmt.Printf("len=%d cap=%d %v\n", len(s[4:]), cap(s[4:]), s [4:])
	//se o : vier depois do numero, os 4 primeiros numeros serao ignorados

	s = append(s, 110)
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
	//toda vez que é usado o append, ele dobra a capacidade do slice

}