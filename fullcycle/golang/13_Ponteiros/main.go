//PONTEIROS
package main

func main() {
	// Memoria -> Endereço -> Valor
	a := 10
	var ponteiro *int = &a
	//Toda vez que eu crio um ponteiro, ele é um endereçamento na memoria
	*ponteiro = 20
	b := &a
	println(*b)
}

//Quando se muda o valor da memoria, atraves do ponteiro, se muda em todo lugar que ele estiver sendo usado