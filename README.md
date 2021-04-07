# React Native + JSON Server template

Ce template permet de démarrer un projet [React Native](https://reactnative.dev/) avec [JSON server](https://github.com/typicode/json-server) durant le cycle de développement. Ceci permet de simuler une API web et une base de données localement.

Le projet React Native est contruit et géré avec [Expo](https://expo.io/).

## Installer les dépendances

```bash
npm ci
```

## JSON Server

Le serveur JSON Server enregistre les données dans le fichier `dev-server/db.json`. Ce fichier est versionné et peut ainsi fournir un jeu de données initial au démarrage de l'application. Le fichier de base de données est automatiquement mis à jour, les modification peuvent ensuite être persistées dans le gestionnaire de sources.

## Démarrer le serveur de développement

La commande ci-dessous démarre le serveur de développement de Expo, le serveur JSON Server et un tunnel ngrok simultanément.

```bash
npm start
```

> Ne pas utiliser la commande `expo start`, qui ne démarre que l'application mobile !

* La page d'accueil du serveur JSON server peut être visualisée depuis cette [URL](http://localhost:3000/).
* La console du serveur expo peut être visualisée depuis cette [URL](http://localhost:19002/).
* Des informations sur le tunnel peuvent être obtenues depuis cette [URL](http://127.0.0.1:4040/).

## Accéder aux données du serveur depuis un terminal mobile

Afin que JSON server soit accéssible localement mais aussi depuis un terminal mobile, un tunnel est monté avec [ngrok](https://www.npmjs.com/package/ngrok).

Lors du démarrage du serveur l'URL du tunnel est ajoutée dans le fichier `.env.json` à la racine du projet. Ce fichier ne dois pas être versionné et sera écrasé à chaque démarrage du serveur.

Une fois le serveur de développement démarré il est possible d'obtenir des informations au sujet du tunnel via cette [URL](http://127.0.0.1:4040).

Dans le fichier `services/test.service.ts` la variable `rootEndpoint` est unitialisé avec la valeur issue du fichier `.env.json`;
