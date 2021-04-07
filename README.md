# React Native + JSON Server template

Ce template permet de démarrer un projet [React Native](https://reactnative.dev/) avec [JSON server](https://github.com/typicode/json-server) durant le cycle de développement. Ceci permet de simuler une API web et une base de données localement.

Le projet React Native est contruit et géré avec [Expo](https://expo.io/).

## Installer JSON Server

Le serveur JSON Server enregistre les données dans le fichier `dev-server/db.json`. Ce fichier est versionné et peut ainsi fournir un jeu de données initial au démarrage de l'application. Le fichier de base de données est automatiquement mis à jour, les modification peuvent ensuite être persistées dans le gestionnaire de sources.

La commande ci-dessous permet d'installer JSON Server globalement.

```bash
npm install -g json-server
```

## Démarrer le serveur de développement

La commande ci-dessous démarre le serveur de développement de Expo ainsi que le serveur JSON Server simultanément.

```bash
npm start
```

> Ne pas utiliser la commande `expo start`, qui ne démarre que l'application mobile !

La page d'accueil du serveur peut être visualisée depuis cette [URL](http://localhost:3000/).

## Accéder aux données du serveur depuis un terminal mobile

La solution précédente fonctionne uniquement pour les déploiements web et émulateur.

La commande suivante permet d'ouvrir un tunnel afin d'accéder au JSON Server local depuis n'importe où.

```bash
npx ngrok http 3000
```

Vous devez également remplacer la valeur de la variable `rootEndpoint` dans le fichier `services/test.service.ts` pour indiquer l'URL du tunnel à la place de `http://localhost:3000`.

![ngrok example](ngrok-tunnel.png)

Vous pouvez alors utiliser les données du serveur depuis l'application mobile déployée.
