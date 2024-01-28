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

### 2. Vision visiteur

Au premier coup d'œil, vous observerez un tableau de devoirs accompagné d'une barre d'outils (toolbar) offrant les options suivantes : menu, home et sign in. Lorsque vous cliquez sur 'menu', un volet latéral (sidenav) s'ouvre, révélant différents boutons : liste des devoirs, ajouter un devoir, noter/restituer un devoir, supprimer un devoir, et générer un devoir. Vous remarquerez que seul le premier bouton est actif, tandis que les autres restent inaccessibles et apparaissent en grisé.

<br>
<img width="1680" alt="0" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/33ebfb4e-0837-46ea-8112-f58963cbe8ac">
<br>

En tant que visiteur du site sans droits d'accès particuliers, les options sont limitées, mais vous pouvez néanmoins visualiser tous les éléments du tableau. Vous avez la possibilité d'appliquer des filtres selon différents critères, tels que le nom du devoir, le statut du devoir (rendu ou non rendu), ou encore la matière. Ces filtres peuvent être utilisés individuellement ou de manière combinée.
<br>

<img width="1680" alt="2" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/d3ed5c83-d95b-4045-9cf2-bc1c5b95285b">
<br>

Aussi, vous pouvez organiser les devoirs selon l'ordre croissant ou décroissant en fonction de la date de rendu ou de l'ID, simplement en cliquant sur les en-têtes 'Date du rendu' ou 'ID' dans le tableau.

De plus, en tant que visiteur, vous avez la possibilité de consulter les détails d'un devoir spécifique en cliquant sur celui-ci dans le tableau. Suite à votre sélection, une nouvelle fenêtre s'ouvrira,affichant toutes les informations pertinentes du devoir sélectionné, y compris: le titre du devoir, son état actuel (complété ou en attente), la date limite de soumission. Si le devoir est déjà soumis et évalué, la note obtenue est affichée, ainsi que tout commentaire associé. Enfin, le nom du cours correspondant est indiqué, accompagné d'une image spécifique et distincte pour chaque matière, en plus du nom de l'enseignant responsable du cours, avec sa photo respective.
On peut voir que les bouttons modifier et supprimer sont grisés.
<br>

<img width="1680" alt="3" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/08c9a9d2-1989-4a9f-8e07-c035ee82f374">
<br>

### 3. La connection


Pour accéder à davantage de fonctionnalités, il est nécessaire de se connecter. Vous pouvez initier ce processus en cliquant sur le bouton de connexion (login). Suite à cela, un formulaire de connexion apparaîtra, vous permettant de saisir vos identifiants.
<br>

<img width="1680" alt="1" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/201e79f4-a0e4-475c-8b4a-babd9bdf16de">
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
<img width="973" alt="5" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/88874f4b-bb75-4884-9774-3e41e5518ef2">
<br>

Une fois qu'on effectue une connection réussite, le bouton login de la toolbar se transforme en logout directement.

### 4. Vision user

Une fois connecté en tant qu'utilisateur standard, les fonctionnalités de base restent accessibles. En plus, deux nouvelles options sont disponibles: un formulaire pour ajouter un devoir, accessible depuis la barre latérale, et un formulaire pour modifier un devoir, accessible depuis la page de détails du devoir concerné.





