let valores = [3, 6, 9, 12, 15]
/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A Posição ${pos} tem o valor ${valores[pos]}`)    
}
*/
for (let pos in valores) {
  console.log(`A posição ${pos} tem valor ${valores[pos]}`)  
}
    us