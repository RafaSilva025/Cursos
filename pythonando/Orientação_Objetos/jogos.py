import forca
import advinhacao

print("***********************")
print("***ESCOLHA SEU JOGO!***")
print("***********************")


print("(1) Forca (2) Advinhação")

jogo = int(input("Qual jogo?"))

if(jogo == 1):
    print("Jogando forca")
    forca.jogar()
elif(jogo == 2):
    print("Jogando Advinhação")
    advinhacao.jogar()    