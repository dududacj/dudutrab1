class Livro:
    def __init__(self, id_livro, titulo, autor):
        self.id_livro = id_livro
        self.titulo = titulo
        self.autor = autor
        self.status = 'disponível'

    def __str__(self):
        return f"[ID: {self.id_livro}] {self.titulo} - {self.autor} ({self.status})"

class Membro:
    def __init__(self, nome, numero_membro):
        self.nome = nome
        self.numero_membro = numero_membro
        self.historico = [] 

    def emprestar_livro(self, livro):
        self.historico.append(livro)
        print(f"{livro.titulo} foi emprestado a {self.nome}.")

    def devolver_livro(self, livro):
        if livro in self.historico:
            self.historico.remove(livro)
            print(f"{livro.titulo} foi devolvido por {self.nome}.")
        else:
            print(f"{self.nome} não possui o livro {livro.titulo}.")



class Biblioteca:
    def __init__(self):
        self.catalogo = []
        self.membros = {}   

    def adicionar_livro(self, livro):
        self.catalogo.append(livro)

    def adicionar_membro(self, membro):
        self.membros[membro.numero_membro] = membro

    def emprestar_livro(self, numero_membro, id_livro):
        membro = self.membros.get(numero_membro)
        if not membro:
            return "Membro não encontrado."

        livro = next((livro for livro in self.catalogo if livro.id_livro == id_livro), None)
        if not livro:
            return "Livro não encontrado."

        if livro.status == 'disponível':
            livro.status = 'emprestado'
            membro.emprestar_livro(livro)
            return f"Livro '{livro.titulo}' emprestado com sucesso."
        else:
            return f"O livro '{livro.titulo}' está atualmente emprestado."

    def devolver_livro(self, numero_membro, id_livro):
        membro = self.membros.get(numero_membro)
        if not membro:
            return "Membro não encontrado."

        livro = next((livro for livro in self.catalogo if livro.id_livro == id_livro), None)
        if not livro:
            return "Livro não encontrado."

        if livro.status == 'emprestado' and livro in membro.historico:
            livro.status = 'disponível'
            membro.devolver_livro(livro)
            return f"Livro '{livro.titulo}' devolvido com sucesso."
        else:
            return f"O livro '{livro.titulo}' não foi emprestado para {membro.nome}."

    def pesquisar_livro(self, titulo=None, autor=None, id_livro=None):
        resultados = self.catalogo
        if titulo:
            resultados = [livro for livro in resultados if titulo.lower() in livro.titulo.lower()]
        if autor:
            resultados = [livro for livro in resultados if autor.lower() in livro.autor.lower()]
        if id_livro:
            resultados = [livro for livro in resultados if livro.id_livro == id_livro]

        return resultados
