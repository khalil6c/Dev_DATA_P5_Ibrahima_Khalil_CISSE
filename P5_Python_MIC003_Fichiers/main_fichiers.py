import fonctions
import json
import xml.etree.ElementTree as ET
#Le travail est divise en deux parties :traiment de donnees et traitement de fichiers
#Traitement fichier a partir du ligne 132

with open('/home/khalil/Bureau/python/Projet Python Fichiers/Donnees_Projet_Python_DataC5.csv' , 'r' ,encoding="UTF-8") as f:  
        eleves=f.read().split("\n")
        del eleves[0]
Tab_eleve=[]
for eleve in eleves :
        
        e=eleve.split(",")
        try:
                dic_eleves={
                        "Code":e[0],
                        "Numero" :e[1],
                        "Nom":e[2],
                        "Prenom":e[3],
                        "Date_nais":e[4],
                        "Classe":e[5],
                        "Note":e[6]

                }
                Tab_eleve.append(dic_eleves)
        except IndexError:
                ""   
           
#suppression des lignes vides
t=[]
for eleves in Tab_eleve :
       if not eleves['Nom']==''  :
          t.append(eleves)  

#Changer format date 
#del t[152]['Date_nais']  
for i in range(len(t)) :
        t[i]["Date_nais"]=t[i]["Date_nais"].lstrip()
        for char in t[i]["Date_nais"] :
                if char in ['-',',',':','_','|','.',' '] :
                        t[i]['Date_nais']=t[i]['Date_nais'].replace(char,"/")
                        
        #print(t[i]["Date_nais"])
#Changer format Classe
for i in range(len(t)):        
        t[i]["Classe"]=t[i]["Classe"].replace(' ','')
        t[i]["Classe"]=t[i]["Classe"][0]+ "em" +t[i]["Classe"][-1].capitalize() 
             

#Recuperation des notes dans un dictionnnaire      
for i in range(len(t)) :
        m=t[i]["Note"].split("#")
        del t[i]["Note"]
        dic_matieres={}
        t[i]["matieres"]={}
        for j in  m :
                j=j.replace("[","-").replace("|","-").replace(":","-").replace("]","-").split("-")
                try:
                       dic_matieres[j[0]]={
                        "Devoir":j[1:-2],
                        "Examen":j[-2]
                       }
                       #print(dic_matieres) 
                       t[i]["matieres"].update(dic_matieres)
                       #print(t[i])       
                        #T.append(dic_matieres)
                       
                except IndexError:
                 pass  

tableau_valide = []
tableau_invalide = []

#Boucle à travers chaque ligne d'élève
for eleve in t:
    numero = eleve['Numero']
    nom=eleve['Nom']
    prenom=eleve['Prenom']
    date_nais=eleve['Date_nais']
    classe=eleve['Classe']
    est_valide = True
    erreur={}

    # Vérifie si le code est valide
    if not fonctions.est_numero_valide(numero):
        #print(f"Le code {code} est invalide car il ne commence pas par un chiffre")
        erreur['numero']= f"Le numero {numero} est invalide "
        est_valide = False

    # Vérifie si le numéro est valide
    if not fonctions.est_prenom_valide(prenom):
        erreur['prenom']= f"Le prenom {prenom} est invalide "
        est_valide = False
    if not fonctions.est_nom_valide(nom):
        erreur['nom']= f"Le nom {nom} est invalide "
        est_valide = False  
    if not fonctions.est_date_valide(date_nais):
        erreur['date_nais']= f"La date {date_nais} est invalide "
        est_valide = False 
    if not fonctions.est_classe_valide(classe):
        erreur['classe']= f"La classe {classe} est invalide "
        est_valide = False  
    for mat in eleve['matieres'] :
          devoir=eleve['matieres'][str(mat)]['Devoir']
          examen=eleve['matieres'][str(mat)]['Examen']
          if not fonctions.notes_devoir_valides(devoir) :
                erreur['devoir']= f"La note de devoir {devoir} est invalide "
                est_valide = False 
          if not fonctions.note_examen_valide(examen) :
                erreur['examen']= f"La note d'examen {examen} est invalide "
                est_valide = False       

    eleve["erreur"]=erreur
    # Ajoute la ligne d'élève au tableau valide ou invalide
    if est_valide:
        tableau_valide.append(eleve)
    else:
        tableau_invalide.append(eleve)

#Calcul de la moyenne par matiere 
for eleve in tableau_valide :
        for matiere, notes in eleve['matieres'].items():
                moyenne_matiere = (sum(int(note) for note in notes['Devoir'])/len(notes['Devoir']) + 2*int(notes['Examen']))/3
                moyenne_matiere=round(moyenne_matiere,2)
                eleve['matieres'][matiere]['Moyenne_matieres'] = moyenne_matiere
# Calcul de la moyenne générale
        moyenne_generale = sum([matiere['Moyenne_matieres'] for matiere in eleve['matieres'].values()])/len(eleve['matieres'])
        moyenne_generale=round(moyenne_generale,2)
# Ajout de la moyenne générale dans le dictionnaire
        eleve['Moyenne_generale'] = moyenne_generale

#################################################################################
# TRAITEMENT DES FICHIERS

#print(tableau_valide)
# Demande à l'utilisateur de choisir le format pour les données valides
print("Dans quel format voulez-vous enregistrer les données valides ?")
print("1. XML")
print("2. JSON")
choix = input("Votre choix (1 ou 2) : ")

# Traitement des données valides selon le choix de l'utilisateur
if choix == "1":
    # Enregistrement des données valides en XML
    racine = ET.Element("eleves")
    for eleve in tableau_valide:
        #La SubElement()fonction permet de créer de nouveaux sous-éléments pour un élément donné 
        elt_eleve = ET.SubElement(racine, "eleve")
        for cle, valeur in eleve.items():
            #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            elt_attribut = ET.SubElement(elt_eleve, cle)
            elt_attribut.text = str(valeur)
    arbre = ET.ElementTree(racine)
    arbre.write("valides.xml", encoding="UTF-8")
    print("Les données valides ont été enregistrées dans le fichier valides.xml")
else:
    # Enregistrement des données valides en JSON
    with open("valides.json", "w", encoding="UTF-8") as f:
        json.dump(tableau_valide, f, indent=4)
    print("Les données valides ont été enregistrées dans le fichier valides.json")

# Demande à l'utilisateur de choisir le format pour les données invalides
print("Dans quel format voulez-vous enregistrer les données invalides ?")
print("1. XML")
print("2. JSON")
choix = input("Votre choix (1 ou 2) : ")

# Traitement des données invalides selon le choix de l'utilisateur
if choix == "1":
    # Enregistrement des données invalides en XML
    racine = ET.Element("eleves")
    for eleve in tableau_invalide:
        elt_eleve = ET.SubElement(racine, "eleve")
        for cle, valeur in eleve.items():
            elt_attribut = ET.SubElement(elt_eleve, cle)
            elt_attribut.text = str(valeur)
    arbre = ET.ElementTree(racine)
    arbre.write("invalides.xml", encoding="UTF-8")
    print("Les données invalides ont été enregistrées dans le fichier invalides.xml")
else:
    # Enregistrement des données invalides en JSON
    with open("invalides.json", "w", encoding="UTF-8") as f:
        json.dump(tableau_invalide, f, indent=4)
    print("Les données invalides ont été enregistrées dans le fichier invalides.json")
        
