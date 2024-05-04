alunos = {}

def adicionar_aluno():
    nome = input("Digite o nome do aluno: ")
    matricula = input("Digite o número de matrícula do aluno: ")
    alunos[matricula] = nome
    print("Aluno adicionado!")

def remover_aluno():
    matricula = input("Digite o número de matrícula do aluno que quer remover: ")
    if matricula in alunos:
        del alunos[matricula]
        print("Aluno removido!")
    else:
        print("Esse aluno nao existe.")

def visualizar_alunos():
    if len(alunos) == 0:
        print("Nenhum aluno registrado.")
    else:
        print("Lista de alunos:")
        for matricula, nome in alunos.items():
            print(f"Número de matrícula: {matricula} - Nome: {nome}")
        print()

while True:
    print("Escolha uma opção:")
    print("1. Adicionar aluno")
    print("2. Remover aluno")
    print("3. Visualizar todos os alunos")
    print("4. Sair")

    opcao = input("Digite o número da opção desejada: ")

    if opcao == "1":
        adicionar_aluno()
    elif opcao == "2":
        remover_aluno()
    elif opcao == "3":
        visualizar_alunos()
    elif opcao == "4":
        print("Saindo do programa...")
        pass
    else:
        print("Opção inválida. Por favor, tente novamente.")