# SneakTrack Frontend

This repository contains the frontend application for **SneakTrack**, a platform for sneaker enthusiasts to manage their collection, track rotations, and keep their sneakers fresh and ready to wear. The frontend is built with **React** and designed to be fully responsive for desktop and mobile users.

## Features

- **Add and Manage Sneakers**: Easily add sneakers to your collection with photos and details.
- **Rotation Tracking**: Mark sneakers as worn and get insights into your usage patterns.
- **Statistics Dashboard**: View statistics about your collection and wearing habits.
- **Reminders and Challenges**: Stay motivated with alerts and gamified challenges.

---

## Tech Stack

- **React**: Core framework for building the UI.
- **Axios**: For API calls to the backend.
- **React Router**: For managing navigation.
- **CSS/SCSS**: For styling (or TailwindCSS/Material-UI if preferred).

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sneaktrack-frontend.git
   cd sneaktrack-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

   Replace `http://localhost:5000` with the URL of your backend server.

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Project Structure

```plaintext
src/
├── components/       # Reusable components
├── pages/            # Page components (e.g., Dashboard, AddSneaker)
├── services/         # API calls and business logic
├── styles/           # Global styles or SCSS files
├── App.js            # Main application entry point
├── index.js          # React DOM rendering
└── ...
```

---

## Scripts

### Development

```bash
npm start
# or
yarn start
```

### Build for production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or suggestions, feel free to reach out to [Hugo Demont](mailto:your-email@example.com).
