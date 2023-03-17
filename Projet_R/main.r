# Lecture et ouverture d'un fichier CSV en R

# Spécifiez le chemin d'accès et le nom du fichier CSV
chemin_du_fichier <- "data.csv"

# Utilisez la fonction read.csv() pour lire le fichier CSV et le stocker dans une variable
donnees <- read.csv2(chemin_du_fichier,sep ="," )

# Affichez les données pour vous assurer qu'elles ont été correctement chargées
print(donnees)
