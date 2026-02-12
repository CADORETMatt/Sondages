
# 📝 Sondages

Application web de gestion de questionnaires et de visualisation de résultats.

🎯 Simple, rapide, efficace !


## 🗂️ Structure du projet

- `index.html` : 🏠 Page d'accueil et liens vers les sondages
- `sondage.html` : 🧩 Formulaires de sondage (TDAH & client)
- `Dashboard.html` : 📊 Visualisation des résultats


## 🚦 Utilisation

- Pour afficher un questionnaire vierge :
	- Accéder à `sondage.html?screen=Nom_Form` (exemple : `sondage.html?screen=tdah` ou `sondage.html?screen=client`)
- 📥 Les réponses sont enregistrées dans Supabase.
- 📊 Le Dashboard affiche tous les sondages soumis via les formulaires de `sondage.html`.


## ✨ Fonctionnalités

- Deux types de questionnaires :
	- 🧠 Sondage TDAH (troubles de la concentration)
	- 🏢 Questionnaire client pour entreprises
- 📈 Visualisation des résultats dans un dashboard interactif
- 📱 Navigation responsive (mobile & desktop)
- 🎨 Interface moderne et personnalisable


## 🚀 Installation & Lancement

1. ⬇️ Cloner le dépôt ou copier les fichiers dans un dossier local
2. 🌐 Ouvrir `index.html` dans un navigateur moderne
3. 📝 Remplir un questionnaire puis consulter les résultats via le Dashboard

> ℹ️ **Remarque :**
> L'application utilise [Supabase](https://supabase.com/) pour stocker les réponses. Les clés d'accès sont à configurer dans les fichiers HTML si besoin.


## 🛠️ Technologies utilisées

- 🖥️ HTML5 / CSS3 (Flexbox, Responsive Design)
- 💻 JavaScript (ES6+)
- 🗄️ Supabase (hébergement des données)


## 🎨 Personnalisation

Vous pouvez modifier les questionnaires dans `sondage.html` et adapter le style dans les balises `<style>` de chaque page.


## 🆕 Dernières modifications

- ✨ Affichage correct des formulaires

## 🔮 Futures modifications envisagées

- 📝 Editer des sondages pour le démarchage
- 📇 Mettre les coordonnées en début de formulaire
- 🎨 CSS pour les html index et surtout sondage
- 🔢 Trier les formulaires
- 🗂️ gitignore et variables d'environnement
- 🛠️ Intégrer un input pour une clé de supabase

###### Texte généré le 12/02/26 à 05:55

## 👤 Auteur

MattMarket Digitals – 2026
