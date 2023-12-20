import random


def jogar():
    
    print("****************************")
    print("BEM VINDO JOGO DE ADVINHAÇÃO")
    print("****************************")

    numero_secreto = random.randrange(1, 51)
    total_de_tentativas = 0
    pontos = 1000

    print("Qual nível de dificuldade?")
    print("(1) Fácil (2) Médio (3) Difícil")

    nivel = int(input("Defina um nível de dificuldade:"))

    if (nivel == 1):
        total_de_tentativas = 10

    elif (nivel == 2):
        total_de_tentativas = 5

    elif (nivel == 3):
        total_de_tentativas = 3

    for rodada in range(1, total_de_tentativas + 1):
        print("Tentativa {} de {}".format(rodada, total_de_tentativas))
        chute_str = input("Digite um número entre 1 e 50: ")
        print("Você digitou: ", chute_str)
        chute = int(chute_str)

        if (chute < 1 or chute > 50):
            print("voce digitou um numero invalido! Tente novamente, com outro numero entre 1 e 50!")
            continue

        acertou = chute == numero_secreto
        maior = chute > numero_secreto
        menor = chute < numero_secreto

        if (acertou):
            print(f"vc acertou e fez {pontos} pontos!")
            break
        else:
            if (maior):
                print("vc errou! seu chute foi maior que o número secreto")

            elif (menor):
                print("vc errou! seu chute foi menor que o número secreto!")
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos

    print("Fim de jogo!")
    print("O numero correto era:", numero_secreto)
