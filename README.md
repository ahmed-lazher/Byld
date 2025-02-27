# 📚 README - Byld

Bienvenue sur **Byld** 🌟, la plateforme ultime dédiée à la gestion de projets de rénovation immobilière. Nous visons à simplifier et optimiser chaque étape de votre projet, de la conception à la réalisation, en offrant une expérience fluide à la fois pour les particuliers et les professionnels.

---

## 📑 Table des Matières

1. [Présentation](#présentation)
   - [Vision et Mission](#vision-et-mission)
   - [Public Cible](#public-cible)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies](#technologies)
4. [Installation](#installation)
   - [Prérequis](#prérequis)
   - [Étapes d'Installation](#étapes-dinstallation)
5. [Contribuer](#contribuer)
6. [Liens Utiles](#liens-utiles)
7. [Support](#support)
8. [Licence](#licence)

---

## 👷‍♂️ Présentation

Byld réinvente la gestion de projets de rénovation immobilière en intégrant des technologies avancées et une interface intuitive. Grâce à la centralisation des informations et à la facilitation de la collaboration, Byld permet une gestion efficace et transparente de tous vos projets.

### 🌍 Vision et Mission

- **Vision :** Établir une plateforme de référence pour la gestion des projets de rénovation.
- **Mission :** Simplifier la communication entre clients et professionnels, optimiser la gestion des projets et promouvoir des pratiques responsables.

### 🎯 Public Cible

- **Particuliers :** Utilisateurs souhaitant gérer efficacement leurs projets de rénovation.
- **Professionnels :** Entreprises et artisans cherchant à optimiser leur activité et leur relation client.

---

## ⚙️ Fonctionnalités

- **💬 Communication Instantanée :** Chat intégré pour un échange fluide d'informations.
- **📅 Planification Dynamique :** Utilisation de l’IA pour optimiser les plannings de travail en temps réel.
- **📂 Centralisation Documentaire :** Accès sécurisé et organisé à tous les documents pertinents du projet.
- **🖼️ Visualisation Interactive :** Simulations visuelles des modifications proposées avant la prise de décision.
- **📊 Tableau de Bord Personnalisé :** Vue d'ensemble sur l'avancement des projets, les budgets et les délais.
- **🧾 Gestion des Devis et Financements :** Outils pour la création et le suivi des devis et des paiements.

---

## 💻 Technologies

Byld est construit sur des technologies modernes pour garantir robustesse et évolutivité :

- **Frontend :** `React`, `Next.js`, `Tailwind CSS` pour une interface utilisateur réactive et élégante.
- **Backend :** `Node.js`, `Express.js`, `Prisma ORM`, `PostgreSQL` pour une gestion efficace des données.
- **🔐 Sécurité :** Authentification via `JWT` et `OAuth` pour une gestion sécurisée des utilisateurs.
- **📡 WebSockets :** Pour des notifications et un chat en temps réel.

---

## 🚀 Installation

### ✅ Prérequis

Assurez-vous d’avoir les éléments suivants installés :

- **Node.js (v16 ou supérieur)**
- **PostgreSQL** pour la base de données

### 📥 Étapes d'Installation

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

Nous accueillons vos contributions avec joie ! Voici comment vous pouvez participer :

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

- [Présentation du Projet](documentation/1.%20Présentation%20du%20Projet)
  - [Public Cible](documentation/1.%20Présentation%20du%20Projet/1.1%20Public%20Cible.md)
  - [Démarrage avec Byld](documentation/1.%20Présentation%20du%20Projet/1.2%20Démarrage%20avec%20Byld.md)
  - [Vision et Mission](documentation/1.%20Présentation%20du%20Projet/1.3%20Vision%20et%20Mission.md)

- [Documentation du Projet](documentation/2.%20Documentation%20du%20Projet)
  - [Exigences Fonctionnelles](documentation/2.%20Documentation%20du%20Projet/2.1%20Exigences%20et%20Objectifs/2.1.1%20Exigences%20Fonctionnelles.md)
  - [Exigences Techniques](documentation/2.%20Documentation%20du%20Projet/2.1%20Exigences%20et%20Objectifs/2.1.2%20Exigences%20Techniques.md)
  - [Architecture](documentation/2.%20Documentation%20du%20Projet/2.2%20Spécifications%20Techniques/2.2.1%20Architecture.md)

- [Guides Utilisateurs](documentation/4.%20Guides%20Utilisateurs)
  - [Administrateur](documentation/4.%20Guides%20Utilisateurs/4.1%20Documentation%20des%20Utilisateurs/4.1.1%20Administrateur.md)
  - [Client](documentation/4.%20Guides%20Utilisateurs/4.1%20Documentation%20des%20Utilisateurs/4.1.2%20Client.md)

- [API et Intégrations](documentation/5.%20API%20et%20Intégrations)
  - [Endpoints](documentation/5.%20API%20et%20Intégrations/5.1%20API%20documentation/5.1.2%20Endpoints.md)
  - [Sécurité des Données](documentation/5.%20API%20et%20Intégrations/5.2%20Sécurité%20et%20Bonnes%20Pratiques/5.2.1%20Sécurité%20des%20Données.md)

- [Journal des Modifications](documentation/7.%20Journal%20des%20Modifications/7.1%20Historique%20des%20Versions.md)
- [Gestion des Systèmes](documentation/8.%20Gestion%20des%20Systèmes/8.1%20Installation%20et%20Configuration/8.1.2%20Procédure%20d'Installation.md)

---

## 📞 Support

Pour toute question ou assistance, vous pouvez nous contacter :

- **Email :** [support@byldapp.com](mailto:support@byldapp.com)
- **Site Web :** [byldapp.com](https://byldapp.com)

---

## 📜 Licence

Byld est distribué sous la licence **MIT**. Pour plus de détails, consultez le fichier [LICENSE](LICENSE).