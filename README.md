# 📚 README - Byld

![License](https://img.shields.io/badge/license-MIT-blue)

Bienvenue sur **Byld** 🌟, la plateforme innovante et intuitive dédiée à la gestion des projets de rénovation immobilière. Conçue pour simplifier l'interaction entre particuliers et professionnels, Byld optimise chaque étape, de la conception à la réalisation. Notre interface ergonomique et nos outils avancés favorisent la collaboration, garantissant des résultats exceptionnels et une transparence totale tout au long du processus.

---

## 📑 Table des Matières

1. [Présentation](#-présentation)
   - [Vision et Mission](#-vision-et-mission)
   - [Public Cible](#-public-cible)
2. [Fonctionnalités](#-fonctionnalités)
3. [Technologies](#-technologies)
4. [Installation](#-installation)
   - [Prérequis](#-prérequis)
   - [Étapes d'Installation](#-étapes-dinstallation)
5. [Contribuer](#-contribuer)
6. [Liens Utiles](#-liens-utiles)
7. [Support](#-support)
8. [Licence](#-licence)

---

## 👷‍♂️ Présentation

Byld transforme la gestion de projets de rénovation en intégrant des technologies avancées et une interface intuitive. Grâce à la centralisation de l'information et à la facilitation de la collaboration, Byld permet une gestion efficace et transparente de tous vos projets.

### 🌍 Vision et Mission

- **Vision :** Devenir la plateforme de référence pour la gestion des projets de rénovation.
- **Mission :** Simplifier la communication entre clients et professionnels, optimiser la gestion des projets et encourager des pratiques responsables.

### 🎯 Public Cible

- **Particuliers :** Utilisateurs souhaitant gérer efficacement leurs projets de rénovation.
- **Professionnels :** Entreprises et artisans cherchant à optimiser leur activité et leur relation client.

---

## ⚙️ Fonctionnalités

- **💬 Communication Instantanée :** Chat intégré pour un échange fluide d'informations.
- **🗓️ Planification Dynamique :** IA pour optimiser les plannings de travail en temps réel.
- **🗂️ Centralisation Documentaire :** Accès sécurisé à tous les documents pertinents.
- **🎮 Visualisation Interactive :** Simulations visuelles avant la décision.
- **📊 Tableau de Bord Personnalisé :** Vue d'ensemble des projets, budgets et délais.
- **🧾 Gestion des Devis et Financements :** Outils pour la création et le suivi des devis et paiements.

---

## 💻 Technologies

Byld est construit sur des technologies modernes pour garantir robustesse et évolutivité :

- **Frontend :** [`React`](https://reactjs.org/), [`Next.js`](https://nextjs.org/), [`Tailwind CSS`](https://tailwindcss.com/)
- **Backend :** [`Node.js`](https://nodejs.org/), [`Express.js`](https://expressjs.com/), [`Prisma ORM`](https://www.prisma.io/), [`PostgreSQL`](https://www.postgresql.org/)
- **🔒 Sécurité :** Authentification via [`JWT`](https://jwt.io/) et [`OAuth`](https://oauth.net/).
- **🛡️ WebSockets :** Notifications et chat en temps réel.

---

## 🚀 Installation

### ✅ Prérequis

Assurez-vous d’avoir les éléments suivants installés :

- **Node.js (v16 ou supérieur)** - [Télécharger Node.js](https://nodejs.org/)
- **PostgreSQL** pour la base de données - [Télécharger PostgreSQL](https://www.postgresql.org/download/)

### 📅 Étapes d'Installation

1. **Clonez le dépôt :**
   ```bash
   git clone git@github.com:ahmed-lazher/Byld.git
   cd Byld
   ```

2. **Installez les dépendances :**
   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement :**
   ```bash
   cp .env.example .env
   ```

4. **Initialisez la base de données :**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Lancez l'application :**
   ```bash
   npm run dev
   ```
   - Accédez à [http://localhost:3000](http://localhost:3000) pour voir votre application en action !

---

## 🤝 Contribuer

Nous accueillons vos contributions ! Voici comment participer :

1. **Forkez le projet.**
2. **Créez une nouvelle branche pour votre fonctionnalité :**
   ```bash
   git checkout -b feature/nouvelle-fonctionnalité
   ```

3. **Commitez vos changements :**
   ```bash
   git commit -m "Ajout de nouvelle fonctionnalité"
   ```

4. **Poussez votre branche :**
   ```bash
   git push origin feature/nouvelle-fonctionnalité
   ```

5. **Ouvrez une Pull Request sur GitHub.**

---

## 🔗 Liens Utiles

Pour des informations plus détaillées, consultez la [documentation complète](https://github.com/ahmed-lazher/Byld/blob/main/documentation/README.md).

---

## 📞 Support

Pour toute question ou assistance, vous pouvez nous contacter :

- **Email :** [support@byldapp.com](mailto:support@byldapp.com)
- **Site Web :** [byldapp.com](https://byldapp.com)

---

## 📜 Licence

Byld est distribué sous la licence **MIT**. Pour plus de détails, consultez le fichier [LICENSE](https://github.com/ahmed-lazher/Byld/blob/main/LICENSE).