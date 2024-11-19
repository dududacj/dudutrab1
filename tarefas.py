import json
tarefas = {}
def adicionar_tarefa(nome, descricao, prioridade, categoria):
    id_tarefa = len(tarefas) + 1
    tarefa = {
        "nome": nome,
        "descricao": descricao,
        "prioridade": prioridade,
        "categoria": categoria,
        "concluida": False
    }
    tarefas[id_tarefa] = tarefa
    print(f"Tarefa '{nome}' adicionada com sucesso.")




def listar_tarefas():
    if not tarefas:
        print("Não tem  tarefas cadastradas.")
        return
    for id_tarefa, tarefa in tarefas.items():
        concluida = "Concluída" if tarefa["concluida"] else "Pendente"
        print(f"ID: {id_tarefa} - {tarefa['nome']} ({concluida})")
        print(f"  Descrição: {tarefa['descricao']}")
        print(f"  Prioridade: {tarefa['prioridade']}")
        print(f"  Categoria: {tarefa['categoria']}")
        print("-" * 40)
def marcar_concluida(id_tarefa):
    if id_tarefa in tarefas:
        tarefas[id_tarefa]["concluida"] = True
        print(f"Tarefa '{tarefas[id_tarefa]['nome']}' marcada como concluída.")
    else:
        print(f"Tarefa com ID {id_tarefa} não encontrei, tente novamente parceiro.")

def listar_por_prioridade(prioridade):
    tarefas_filtradas = [tarefa for tarefa in tarefas.values() if tarefa['prioridade'] == prioridade]
    if tarefas_filtradas:
        for tarefa in tarefas_filtradas:
            print(f"Nome: {tarefa['nome']} | Descrição: {tarefa['descricao']}")
            print(f"  Prioridade: {tarefa['prioridade']} | Categoria: {tarefa['categoria']}")
            print("-" * 40)
    else:
        print(f"Não há tarefas com prioridade {prioridade}.")
def listar_por_categoria(categoria):
    tarefas_filtradas = [tarefa for tarefa in tarefas.values() if tarefa['categoria'] == categoria]
    if tarefas_filtradas:
        for tarefa in tarefas_filtradas:
            print(f"Nome: {tarefa['nome']} | Descrição: {tarefa['descricao']}")
            print(f"  Prioridade: {tarefa['prioridade']} | Categoria: {tarefa['categoria']}")
            print("-" * 40)
    else:
        print(f"Não há tarefas na categoria '{categoria}'.")

def salvar_tarefas():
    with open('tarefas.json', 'w') as f:
        json.dump(tarefas, f, indent=4)
    print("Tarefas salvas no arquivo 'tarefas.json'.")

def carregar_tarefas():
    global tarefas
    try:
        with open('tarefas.json', 'r') as f:
            tarefas = json.load(f)
        print("Tarefas carregadas do arquivo 'tarefas.json'.")
    except FileNotFoundError:
        print("Arquivo de tarefas não encontrado. Nao vou carregar nada.")


def exibir_menu():
    print("\nGerenciador de Tarefas Diárias")
    print("1 - Adicionar Tarefa")
    print("2 - Listar Tarefas")
    print("3 - Marcar Tarefa como Concluída")
    print("4 - Listar Tarefas por Prioridade")
    print("5 - Listar Tarefas por Categoria")
    print("6 - Salvar Tarefas")
    print("7 - Carregar Tarefas")
    print("8 - Sair")
def main():
    carregar_tarefas()
    
    while True:
        exibir_menu()
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            nome = input("Nome da tarefa: ")
            descricao = input("Descrição da tarefa: ")
            prioridade = input("Prioridade (baixa, média, alta): ")
            categoria = input("Categoria da tarefa: ")
            adicionar_tarefa(nome, descricao, prioridade, categoria)

        elif opcao == "2":
            listar_tarefas()

        elif opcao == "3":
            try:
                id_tarefa = int(input("ID da tarefa q vai ser marcada como concluída: "))
                marcar_concluida(id_tarefa)
            except ValueError:
                print(" insira um ID válido.")

        elif opcao == "4":
            prioridade = input("Digite a prioridade (baixa, média, alta): ")
            listar_por_prioridade(prioridade)

        elif opcao == "5":
            categoria = input("Digite a categoria: ")
            listar_por_categoria(categoria)

        elif opcao == "6":
            salvar_tarefas()

        elif opcao == "7":
            carregar_tarefas()

        elif opcao == "8":
            print("Saindo do programa")
            break

        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()
