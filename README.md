# SneakTrack Frontend

Ce dépôt contient l'application frontend de **SneakTrack**, une plateforme destinée aux passionnés de sneakers pour gérer leur collection, suivre les rotations et garder leurs paires en parfait état. Le frontend est développé avec **React** et conçu pour être entièrement responsive, aussi bien sur desktop que sur mobile.

## Fonctionnalités

- **Ajout et gestion des sneakers** : Ajoutez facilement des sneakers à votre collection avec photos et détails.
- **Suivi des rotations** : Marquez vos sneakers comme portées et obtenez des insights sur vos habitudes d'utilisation.
- **Tableau de bord statistique** : Visualisez des statistiques sur votre collection et vos habitudes de port.
- **Rappels et défis** : Restez motivé grâce à des alertes et des défis ludiques.

---

## Stack technique

- **React** : Framework principal pour construire l'interface utilisateur.
- **Axios** : Pour les appels API vers le backend.
- **React Router** : Pour la gestion de la navigation.
- **CSS/SCSS** : Pour le stylisme (ou TailwindCSS/Material-UI si préféré).

---

## Démarrage

### Prérequis

Assurez-vous d'avoir les éléments suivants installés :

- **Node.js** (v16 ou supérieur)
- **npm** ou **yarn**

### Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/your-username/sneaktrack-frontend.git
   cd sneaktrack-frontend
   ```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement suivantes :

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

   Remplacez `http://localhost:5000` par l'URL de votre serveur backend.

4. Lancez le serveur de développement :

   ```bash
   npm start
   # ou
   yarn start
   ```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

---

## Structure du projet

```plaintext
src/
├── components/       # Composants réutilisables
├── pages/            # Composants de pages (ex. : Dashboard, AddSneaker)
├── services/         # Appels API et logique métier
├── styles/           # Styles globaux ou fichiers SCSS
├── App.js            # Point d'entrée principal de l'application
├── index.js          # Rendu DOM de React
└── ...
```

---

## Scripts

### Développement

```bash
npm start
# ou
yarn start
```

### Build pour la production

```bash
npm run build
# ou
yarn build
```

### Linting

```bash
npm run lint
# ou
yarn lint
```

---

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b nom-de-la-fonctionnalité`).
3. Commitez vos modifications (`git commit -m 'Ajout d'une fonctionnalité'`).
4. Pushez votre branche (`git push origin nom-de-la-fonctionnalité`).
5. Ouvrez une pull request.

---

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Contact

Pour toute question ou suggestion, n'hésitez pas à contacter [Hugo Demont](mailto:your-email@example.com).
