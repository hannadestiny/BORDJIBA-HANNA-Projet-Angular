# Projet Final d'Angular

## Par Rania BORDJIBA et Destiny HANNA

Ce README contiendra une présentation du fonctionnement du projet et de ses fonctionnalités, ainsi qu'une courte vidéo à la fin pour illustrer ces détails de manière approfondie.

### 1. Lancement du projet
Une fois le code téléchargé, procédez à l'ouverture de deux terminaux pour démarrer le projet :

Après avoir téléchargé le code, il est nécessaire d'ouvrir deux terminaux pour mettre en marche le projet :

1. Ouvrez un premier terminal intégré au dossier `app`. Exécutez d'abord la commande `npm install` pour télécharger toutes les dépendances requises.
2. Dans le même terminal, lancez ensuite la commande `ng serve`. Cela démarrera le front-end du projet.
3. Puis, ouvrez un second terminal intégré au dossier `api`. Exécutez la commande `npm run start` pour établir la connexion avec le back-end du projet, en particulier avec la base de données MongoDB.
4. Une fois les deux terminaux opérationnels, accédez à l'adresse `http://localhost:4200` dans votre navigateur pour visualiser le projet.
<br>
<img width="1680" alt="0" src="https://github.com/M1-MIAGE-23-24/BORDJIBA-HANNA-Projet-Angular/assets/147160467/635024f4-f81f-4c45-acdd-9e2b15771fd4">
<br>

<br>

Au premier coup d'œil, vous observerez un tableau de devoirs accompagné d'une barre d'outils (toolbar) offrant les options suivantes : menu, home et sign in. Lorsque vous cliquez sur 'menu', un volet latéral (sidenav) s'ouvre, révélant différents boutons : liste des devoirs, ajouter un devoir, noter/restituer un devoir, supprimer un devoir, et générer un devoir. Vous remarquerez que seul le premier bouton est actif, tandis que les autres restent inaccessibles et apparaissent en grisé.

<br> 
<br>
<img width="1680" alt="2" src="https://github.com/M1-MIAGE-23-24/BORDJIBA-HANNA-Projet-Angular/assets/147160467/02573650-54f2-46c8-a13e-80abe72c6858">
<br>
<br>

En tant que visiteur du site sans droits d'accès particuliers, les options sont limitées, mais vous pouvez néanmoins visualiser tous les éléments du tableau. Vous avez la possibilité d'appliquer des filtres selon différents critères, tels que le nom du devoir, le statut du devoir (rendu ou non rendu), ou encore la matière. Ces filtres peuvent être utilisés individuellement ou de manière combinée.

De plus, vous pouvez organiser les devoirs selon l'ordre croissant ou décroissant en fonction de la date de rendu ou de l'ID, simplement en cliquant sur les en-têtes 'Date du rendu' ou 'ID' dans le tableau.

De plus, en tant que visiteur, vous avez la possibilité de consulter les détails d'un devoir spécifique en cliquant sur celui-ci dans le tableau. Suite à votre sélection, une nouvelle fenêtre s'ouvrira, affichant les détails complets du devoir choisi.
<br>
<br>
<img width="1680" alt="3" src="https://github.com/M1-MIAGE-23-24/BORDJIBA-HANNA-Projet-Angular/assets/147160467/17e92085-fcda-40e6-a084-15cf7d35f44e">

<br>
<br>

Pour accéder à davantage de fonctionnalités, il est nécessaire de se connecter. Vous pouvez initier ce processus en cliquant sur le bouton de connexion (login). Suite à cela, un formulaire de connexion apparaîtra, vous permettant de saisir vos identifiants.

<br>
<br>

![4](https://github.com/M1-MIAGE-23-24/BORDJIBA-HANNA-Projet-Angular/assets/147160467/d6019802-5378-45c3-a1ed-2349b3ec47f9)

<br>
<br>

Pour la connexion, le système propose deux rôles distincts, chacun offrant des niveaux d'accès spécifiques : administrateur (admin) et utilisateur (user). Pour expérimenter avec les différentes fonctionnalités, voici les identifiants pour chaque rôle :

Utilisateurs existants :
- Nom d'utilisateur : 'user', Mot de passe : 'user'
- Nom d'utilisateur : 'Geraldine', Mot de passe : 'abc'

Administrateurs existants :
- Nom d'utilisateur : 'admin', Mot de passe : 'admin'
- Nom d'utilisateur : 'David', Mot de passe : '123'

Peu importe le rôle avec lequel vous vous connectez, un message contextuel (snackbar) s'affichera pour confirmer le rôle de la personne connectée (admin ou user). Si les identifiants sont incorrects, le message indiquera une erreur de connexion et encouragera à vérifier les identifiants saisis.
<br>
<br>

![IMG_4711](https://github.com/M1-MIAGE-23-24/BORDJIBA-HANNA-Projet-Angular/assets/147160467/11277e4a-206f-49fa-8cee-da95f8bcb234)

