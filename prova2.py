numeros=[]
pares=[]
impares= []

for _ in range(10):
    numero= int(input('Digite  um numero:'))
    numeros.append(numero)
    if numero%2==0:
        pares.append(numero)
    else:
        impares.append(numero)

print(f'numeros pares:{pares}')
print(f'numeros impares:', tuple(impares))
print('quantos numeros impares:', len (impares))
print('quantos numeros pares:', len (pares))

soma_dos_numeros_pares= sum(pares)
soma_dos_numeros_impares= sum(impares)

print(f'A soma dos numeros pares é {soma_dos_numeros_pares}')
print(f'A soma dos numeros impares é {soma_dos_numeros_impares}')