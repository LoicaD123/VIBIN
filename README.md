
# VIBIN — Fullstack App (Vite + React + Express)

Ce projet “VIBIN” est une application fullstack composée de :

- **Frontend** : React (JSX) avec Vite.js  
- **Backend** : Express.js (Node.js)

**URL du dépôt :** https://github.com/LoicaD123/VIBIN.git

---

## 📁 Structure du projet

```

VIBIN/
├── Backend/        # Serveur Express
│   ├── app.js
│   ├── package.json
│   └── …
└── Frontend/       # App React + Vite
├── src/
├── index.html
├── package.json
└── …

````

---

## 💻 Environnement de développement

1. **Cloner le dépôt**  
   ```bash
   git clone https://github.com/LoicaD123/VIBIN.git
   cd VIBIN


2. **Installer les dépendances**

   ```bash
   cd Backend
   npm install

   cd ../Frontend
   npm install
   
   front
   npm install react-router-dom

   npm install -D @tailwindcss/postcss
   
   npm install react-router-dom
   



    back
   npm install express sequelize mysql2 bcrypt

   npm install jsonwebtoken bcryptjs
   
   npm install bcrypt
   
   npm install dotenv

 
   npm install cors
     
   node sync.js  
   
   node seed.js 

   ```

3. **Configurer les variables d’environnement (backend)**
   Créez un fichier `Backend/.env` à partir de `Backend/.env.example` et ajoutez-y :

   ```env
   PORT=3000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=une_clef_secrète
   ```

4. **Lancer les serveurs en mode développement**

    * **Onglet 1** (Backend) :

      ```bash
      cd Backend
      npm start
      # => backend écoute sur http://localhost:3000
      ```
    * **Onglet 2** (Frontend) :

      ```bash
      cd Frontend
      npm run dev
      # => frontend disponible sur http://localhost:5173
      ```

---

## 🛠️ Scripts utiles

| Emplacement  | Commande          | Description                         |
| ------------ | ----------------- | ----------------------------------- |
| **Backend**  | `npm start`       | Démarre le serveur Express          |
| **Frontend** | `npm run dev`     | Démarre Vite en mode développement  |
| **Frontend** | `npm run build`   | Génère les fichiers statiques       |
| **Frontend** | `npm run preview` | Prévisualise le build de production |

---

# Environnement
Backend/.env

---

## ✍️ Auteur

LoicaD123
2025 — VIBIN Project

