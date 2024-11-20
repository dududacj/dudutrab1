import tkinter as tk
from tkinter import messagebox
from biblioteca import Livro, Membro, Biblioteca

def exibir_resultados(resultados):
    for widget in resultado_frame.winfo_children():
        widget.destroy()
    
    if resultados:
        for livro in resultados:
            tk.Label(resultado_frame, text=str(livro)).pack()
    else:
        tk.Label(resultado_frame, text="Nenhum livro encontrado.").pack()



def adicionar_livro():
    id_livro = int(id_livro_entry.get())
    titulo = titulo_entry.get()
    autor = autor_entry.get()
    if titulo and autor:
        livro = Livro(id_livro, titulo, autor)
        biblioteca.adicionar_livro(livro)
        messagebox.showinfo("Sucesso", f"Livro '{titulo}' adicionado ao catálogo!")
    else:
        messagebox.showerror("Erro", "Arrume isso")



def adicionar_membro():
    nome = nome_membro_entry.get()
    numero_membro = numero_membro_entry.get()
    if nome and numero_membro:
        membro = Membro(nome, numero_membro)
        biblioteca.adicionar_membro(membro)
        messagebox.showinfo("Sucesso", f"Membro {nome} adicionado!")
    else:
        messagebox.showerror("Erro", "Arrume logo.")



def emprestar_livro():
    numero_membro = numero_membro_emprestimo_entry.get()
    id_livro = int(id_livro_emprestimo_entry.get())
    resultado = biblioteca.emprestar_livro(numero_membro, id_livro)
    messagebox.showinfo("Resultado", resultado)


def devolver_livro():
    numero_membro = numero_membro_devolucao_entry.get()
    id_livro = int(id_livro_devolucao_entry.get())
    resultado = biblioteca.devolver_livro(numero_membro, id_livro)
    messagebox.showinfo("Resultado", resultado)



def pesquisar_livro():
    titulo = titulo_pesquisa_entry.get()
    autor = autor_pesquisa_entry.get()
    id_livro = id_livro_pesquisa_entry.get()
    id_livro = int(id_livro) if id_livro else None
    resultados = biblioteca.pesquisar_livro(titulo, autor, id_livro)
    exibir_resultados(resultados)



biblioteca = Biblioteca()
root = tk.Tk()
root.title("Gerenciamento de Biblioteca")
add_livro_frame = tk.Frame(root)
add_livro_frame.pack(pady=10)

tk.Label(add_livro_frame, text="Adicionar Livro").grid(row=0, columnspan=2)

tk.Label(add_livro_frame, text="ID do Livro:").grid(row=1, column=0)
id_livro_entry = tk.Entry(add_livro_frame)
id_livro_entry.grid(row=1, column=1)

tk.Label(add_livro_frame, text="Título:").grid(row=2, column=0)
titulo_entry = tk.Entry(add_livro_frame)
titulo_entry.grid(row=2, column=1)

tk.Label(add_livro_frame, text="Autor:").grid(row=3, column=0)
autor_entry = tk.Entry(add_livro_frame)
autor_entry.grid(row=3, column=1)

tk.Button(add_livro_frame, text="Adicionar Livro", command=adicionar_livro).grid(row=4, columnspan=2)

add_membro_frame = tk.Frame(root)
add_membro_frame.pack(pady=10)

tk.Label(add_membro_frame, text="Adicionar Membro").grid(row=0, columnspan=2)

tk.Label(add_membro_frame, text="Nome:").grid(row=1, column=0)
nome_membro_entry = tk.Entry(add_membro_frame)
nome_membro_entry.grid(row=1, column=1)

tk.Label(add_membro_frame, text="Número do Membro:").grid(row=2, column=0)
numero_membro_entry = tk.Entry(add_membro_frame)
numero_membro_entry.grid(row=2, column=1)

tk.Button(add_membro_frame, text="Adicionar Membro", command=adicionar_membro).grid(row=3, columnspan=2)


emp_devolucao_frame = tk.Frame(root)
emp_devolucao_frame.pack(pady=10)

tk.Label(emp_devolucao_frame, text="Emprestar Livro").grid(row=0, columnspan=2)

tk.Label(emp_devolucao_frame, text="Número do Membro:").grid(row=1, column=0)
numero_membro_emprestimo_entry = tk.Entry(emp_devolucao_frame)
numero_membro_emprestimo_entry.grid(row=1, column=1)

tk.Label(emp_devolucao_frame, text="ID do Livro:").grid(row=2, column=0)
id_livro_emprestimo_entry = tk.Entry(emp_devolucao_frame)
id_livro_emprestimo_entry.grid(row=2, column=1)

tk.Button(emp_devolucao_frame, text="Emprestar Livro", command=emprestar_livro).grid(row=3, columnspan=2)

tk.Label(emp_devolucao_frame, text="Devolver Livro").grid(row=4, columnspan=2)

tk.Label(emp_devolucao_frame, text="Número do Membro:").grid(row=5, column=0)
numero_membro_devolucao_entry = tk.Entry(emp_devolucao_frame)
numero_membro_devolucao_entry.grid(row=5, column=1)

tk.Label(emp_devolucao_frame, text="ID do Livro:").grid(row=6, column=0)
id_livro_devolucao_entry = tk.Entry(emp_devolucao_frame)
id_livro_devolucao_entry.grid(row=6, column=1)

tk.Button(emp_devolucao_frame, text="Devolver Livro", command=devolver_livro).grid(row=7, columnspan=2)


pesquisa_frame = tk.Frame(root)
pesquisa_frame.pack(pady=10)

tk.Label(pesquisa_frame, text="Pesquisar Livro").grid(row=0, columnspan=2)

tk.Label(pesquisa_frame, text="Título:").grid(row=1, column=0)
titulo_pesquisa_entry = tk.Entry(pesquisa_frame)
titulo_pesquisa_entry.grid(row=1, column=1)

tk.Label(pesquisa_frame, text="Autor:").grid(row=2, column=0)
autor_pesquisa_entry = tk.Entry(pesquisa_frame)
autor_pesquisa_entry.grid(row=2, column=1)

tk.Label(pesquisa_frame, text="ID do Livro:").grid(row=3, column=0)
id_livro_pesquisa_entry = tk.Entry(pesquisa_frame)
id_livro_pesquisa_entry.grid(row=3, column=1)

tk.Button(pesquisa_frame, text="Pesquisar", command=pesquisar_livro).grid(row=4, columnspan=2)


resultado_frame = tk.Frame(root)
resultado_frame.pack(pady=10)




root.mainloop()
