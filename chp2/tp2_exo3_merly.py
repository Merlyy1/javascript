from random import randint

nbre_aleatoire1 = randint(1,5)
nbre_aleatoire2 = randint(1,6)
choix = 0
essai = 0

        

while not choix == 2:
    print(f"Le nombre {nbre_aleatoire1} et {nbre_aleatoire2} ne sont pas égaux, réessayez.")
    essai +=1
    print(f"Le compteur s'incrémente de {essai}")

    print("voulez-vous réessayer (1) ou quitter (2) ?")
    choix = int(input("Votre choix : "))
    while choix < 1 or choix > 2:
        print("voulez-vous réessayer (1) ou quitter (2) ?")
        choix = int(input("Votre choix : "))

    nbre_aleatoire1 = randint(1,5)
    nbre_aleatoire2 = randint(1,6)

    if nbre_aleatoire1 == nbre_aleatoire2:
        print(f"Le nombre {nbre_aleatoire1} et {nbre_aleatoire2} sont égaux.")
        print(f"Bravo, vous avez réussi au bout de {essai} essai")
        break

