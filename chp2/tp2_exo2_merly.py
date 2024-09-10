from random import randint

nbre_aleatoire1 = randint(1,100)
nbre_aleatoire2 = randint(1,100)
choix = 0
resultat = nbre_aleatoire1+nbre_aleatoire2

print(f"Vous avez tirés au sort {nbre_aleatoire1} et {nbre_aleatoire2}.")


while not choix == 2:
    print(f"Essayez de trouver le résultat de la somme de {nbre_aleatoire1} et {nbre_aleatoire2}.")
    somme_str = input("Entrez le résultat : ")
    try:
        somme_int = int(somme_str)
    except:
        print("Vous n'avez pas saisi une valeur numérique.")
    else:
        if somme_int == resultat:
            print("Félicitation, vous avez trouver la bonne réponse !")
            break
        elif somme_int < 1:
            print("Vous avez saisi une valeur négative")
            somme_int = 0
        elif not somme_int == resultat:
            print("Ce n'est pas le résulat attendu, faites votre choix : vous voulez réessayer (1) ou quitter (2)?")
            choix = int(input("Votre choix : "))
            somme_int = 0
            while choix < 1 or choix > 2:
                print("Ce n'est pas le résulat attendu, faites votre choix : vous voulez réessayer (1) ou quitter (2)?")
                choix = int(input("Votre choix : "))
                somme_int = 0
        else:
            print("Réesayez")
            somme_int = 0

