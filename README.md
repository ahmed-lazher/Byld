### `README.md`

```markdown
# 🚀 Byld App

Byld App est une plateforme innovante de gestion de projets de rénovation, intégrant des outils d'intelligence artificielle pour optimiser la planification des travaux, la communication et la gestion documentaire.

## 📌 Fonctionnalités principales

- 📊 **Dashboard** : Interface utilisateur intuitive pour la gestion des projets.
- 🏗️ **Projets de rénovation** : Création, suivi et gestion avancée.
- 💬 **Chat intégré** : Communication fluide entre les parties prenantes.
- 📅 **Planification intelligente** : Assistance IA pour la gestion des tâches et délais.
- 📂 **Documents & fichiers** : Centralisation des plans, devis et documents de projet.
- 🔐 **Authentification sécurisée** : Gestion des utilisateurs avec JWT et OAuth.
- 🎨 **Interface moderne** : Développée avec Next.js et Tailwind CSS.

---

## 🛠️ Technologies utilisées

- **Framework** : [Next.js](https://nextjs.org/)
- **Langage** : TypeScript
- **Base de données** : PostgreSQL (via Prisma ORM)
- **UI** : Tailwind CSS, ShadCN
- **État global** : Redux Toolkit
- **Auth** : JWT, OAuth (Google, GitHub)
- **Hébergement** : Vercel, Railway (DB)
- **CI/CD** : GitHub Actions

---

## 📂 Structure du projet

```
Byld/
├───src/
│   ├───middleware.ts               // Middleware global (auth, log, etc.)
│   ├───app/
│   │   ├───layout.tsx              // Structure principale des pages
│   │   ├───page.tsx                // Page d'accueil
│   │   ├───dashboard/
│   │   │   ├───page.tsx            // Vue d'ensemble du tableau de bord
│   │   │   ├───projects/
│   │   │   │   ├───page.tsx        // Liste des projets
│   │   │   │   ├───[id]/
│   │   │   │   │   ├───chat.tsx    // Discussions sur le projet
│   │   │   │   │   ├───documents.tsx
│   │   │   │   │   ├───page.tsx
│   │   │   │   │   ├───planning.tsx
│   │   │   │   │   ├───tasks.tsx
│   │   │   │   │   ├───quotes.tsx
│   │   │   │   │   ├───payments.tsx
│   │   │   │   │   ├───financing.tsx
│   │   │   │   │   ├───renovation.tsx
│   │   │   ├───companies/
│   │   │   │   ├───page.tsx        // Liste des entreprises
│   │   │   │   ├───[id]/
│   │   │   │   │   ├───details.tsx // Détails de l'entreprise
│   │   │   │   │   ├───reviews.tsx
│   │   │   │   │   ├───projects.tsx
│   │   │   │   │   ├───quotes.tsx
│   │   │   │   │   ├───availability.tsx
│   │   │   ├───payments/
│   │   │   │   ├───page.tsx        // Paiements
│   │   │   ├───notifications/
│   │   │   │   ├───page.tsx        // Notifications
│   │   │   ├───reviews/
│   │   │   │   ├───page.tsx        // Avis utilisateurs
│   │   │   ├───subscriptions/
│   │   │   │   ├───page.tsx        // Abonnements
│   │   │   ├───activity-logs/
│   │   │   │   ├───page.tsx        // Logs d'activités
│   │   │   ├───tasks/
│   │   │   │   ├───page.tsx        // Liste des tâches
│   │   │   ├───user-settings/
│   │   │   │   ├───page.tsx        // Paramètres utilisateurs
│   ├───auth/
│   │   ├───login.tsx               // Page de connexion
│   │   ├───register.tsx            // Page d'enregistrement
│   │   ├───forgot-password.tsx     // Réinitialisation du mot de passe
│   │   ├───reset-password.tsx      // Formulaire de réinitialisation du mot de passe
│   ├───admin/
│   │   ├───page.tsx                // Page d'administration
│   │   ├───projects/
│   │   │   ├───page.tsx            // Gestion des projets administratifs
│   │   ├───users/
│   │   │   ├───page.tsx            // Gestion des utilisateurs
│   │   ├───companies/
│   │   │   ├───page.tsx            // Gestion des entreprises
│   │   ├───reports/
│   │   │   ├───page.tsx            // Rapports générés
│   ├───common/
│   │   ├───components/
│   │   │   ├───Header.tsx          // En-tête principal
│   │   │   ├───Footer.tsx          // Pied de page
│   │   │   ├───Sidebar.tsx         // Barre latérale
│   │   │   ├───Navbar.tsx          // Barre de navigation
│   │   │   ├───ProjectCard.tsx     // Carte projet
│   │   │   ├───CompanyCard.tsx     // Carte entreprise
│   │   │   ├───QuoteCard.tsx       // Carte devis
│   │   │   ├───TaskCard.tsx        // Carte tâche
│   │   │   ├───NotificationBadge.tsx
│   │   │   ├───PaymentForm.tsx     // Formulaire de paiement
│   │   │   ├───ChatBubble.tsx      // Bulle de chat
│   │   │   ├───FileUploader.tsx    // Uploader de fichiers
│   │   │   ├───DatePicker.tsx      // Sélecteur de date
│   │   ├───hooks/
│   │   │   ├───useAuth.ts          // Hook d'authentification
│   │   │   ├───useProjects.ts      // Hook de gestion des projets
│   │   │   ├───useCompanies.ts     // Hook pour les entreprises
│   │   │   ├───useQuotes.ts        // Hook pour les devis
│   │   │   ├───useChat.ts          // Hook pour les chats
│   │   │   ├───usePayment.ts       // Hook pour les paiements
│   │   ├───services/
│   │   │   ├───projectService.ts   // Service pour les projets
│   │   │   ├───companyService.ts   // Service pour les entreprises
│   │   │   ├───quoteService.ts     // Service pour les devis
│   │   │   ├───chatService.ts      // Service pour les discussions
│   │   │   ├───paymentService.ts   // Service pour les paiements
│   │   │   ├───notificationService.ts
│   │   │   ├───subscriptionService.ts
│   │   ├───utils/
│   │   │   ├───formatDate.ts       // Utilitaires pour formater les dates
│   │   │   ├───formatCurrency.ts   // Utilitaires pour formater les devises
│   │   │   ├───validation.ts       // Fonctions de validation
│   ├───styles/
│   │   ├───global.css              // Styles globaux
│   │   ├───tailwind.config.js      // Configuration TailwindCSS
│   ├───public/
│   │   ├───images/
│   │   │   ├───logo.png
│   │   │   ├───logo-dark.png
│   │   │   ├───favicon.ico
│   │   ├───fonts/
│   │   │   ├───custom-font.ttf
│   │   ├───videos/
│   │   │   ├───intro.mp4
│   │   ├───svgs/
│   │   │   ├───icon-check.svg
│   ├───api/
│   │   ├───auth/
│   │   │   ├───login.ts
│   │   │   ├───register.ts
│   │   │   ├───forgot-password.ts
│   │   │   ├───reset-password.ts
│   │   ├───projects/
│   │   │   ├───create.ts
│   │   │   ├───update.ts
│   │   │   ├───delete.ts
│   │   │   ├───list.ts
│   │   │   ├───get.ts
│   │   ├───companies/
│   │   │   ├───list.ts
│   │   │   ├───get.ts
│   │   ├───quotes/
│   │   │   ├───create.ts
│   │   │   ├───update.ts
│   │   │   ├───delete.ts
│   │   │   ├───list.ts
│   │   ├───payments/
│   │   │   ├───create.ts
│   │   │   ├───update.ts
│   │   ├───chats/
│   │   │   ├───create.ts
│   │   │   ├───update.ts
│   │   │   ├───list.ts
│   │   ├───notifications/
│   │   │   ├───list.ts
│   │   │   ├───create.ts
│   │   │   ├───update.ts
│   │   ├───subscriptions/
│   │   │   ├───create.ts
│   │   │   ├───update.ts
│   ├───prisma/
│   │   ├───schema.prisma           // Schéma Prisma
│   │   ├───migrations/
│   │   └───seed.ts                 // Fichier d'initialisation de la base de données
│   └───tests/
│       ├───unit/
│       │   ├───auth.test.ts
│       │   ├───projects.test.ts
│       │   └───companies.test.ts
│       └───integration/
│           ├───payment.test.ts
│           ├───chat.test.ts
│           └───quote.test.ts
├───.env                            // Variables d'environnement pour la configuration
├───package.json                    // Dépendances et scripts du projet
├───tsconfig.json                   // Configuration TypeScript
└───README.md                       // Documentation du projet
```

---

## 🚀 Installation et démarrage

### 1️⃣ Prérequis

- Node.js (>=18)
- PostgreSQL installé localement ou via Docker
- Prisma CLI (`npm install -g prisma`)

### 2️⃣ Cloner le projet

```bash
git clone git@github.com:ahmed-lazher/Byld.git
cd Byld
```

### 3️⃣ Configurer l'environnement

Copiez le fichier `.env.example` et renommez-le en `.env.local`, puis mettez à jour les variables :

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:123@localhost:5432/byld
```

### 4️⃣ Installer les dépendances

```bash
npm install
```

### 5️⃣ Générer le schéma Prisma et le fichier seed pour peupler la base de données avec des données de test

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 6️⃣ Lancer l'application

```bash
npm run dev
npx tsx prisma/seed.ts
```

L'application sera accessible sur **`http://localhost:3000`** 🚀.

---

## 📜 Scripts disponibles

| Commande             | Description                               |
|----------------------|-------------------------------------------|
| `npm run dev`       | Démarre l'application en mode développement |
| `npm run build`     | Compile le projet pour la production       |
| `npm run start`     | Démarre le serveur en production           |
| `npm run lint`      | Analyse le code avec ESLint                |
| `npm run test`      | Lance les tests unitaires                  |

---

## 📬 Contact & Support

📧 Email : [contact@byldapp.com](mailto:contact@byldapp.com)  
🌍 Site Web : [www.byldapp.com](https://www.byldapp.com)  

👨‍💻 Développé avec ❤️ par l'équipe Byld.  

