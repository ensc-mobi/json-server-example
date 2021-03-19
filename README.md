# React Native + JSON server kick start

Ce template permet de démarrer un projet [React Native](https://reactnative.dev/) avec [JSON server](https://github.com/typicode/json-server) durant le cycle de développement. Ceci permet de simuler un API Web et une base de donnée localement.

Le projet React Native est contruit et géré avec [Expo](https://expo.io/).

## Démarrer le serveur de développement

La commande ci-dessous démarrer le serveur de développement de Expo ainsi que le serveur JSON server simultanéement.

```bash
npm start
```

## JSON server

Le serveur JSON server enregistre les données dans le fichier `dev-server/db.json`. Ce fichier est versionné et peut ainsi fournir un jeux de données initial au démarrage de l'application. Le fichier de base de données est automatiquement mis à jour, les modification peuvent ensuite être persistées dans le gestionnaire de sources.

La page d'accueil du serveur peut être visualisée depuis cette [URL](http://localhost:3000/).
