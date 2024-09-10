try:
    moyenne = int(input("Saisir votre moyenne : "))
    if moyenne >= 18:
        print("Votre moyenne est excellente")
    elif moyenne >= 14 and moyenne < 18:
        print("Votre moyenne est très bonne")
    elif moyenne >= 10 and moyenne < 14:
        print("Votre moyenne est assez bonne")
    elif moyenne >= 5 and moyenne < 10:
        print("Votre moyenne est insuffisante")
    else:
        print("Votre moyenne est catastrophique")
except: 
    print("Erreur : La saisie n'est pas correcte.")
