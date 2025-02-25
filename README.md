# 🚀 **Byld - Gestion de Projets de Rénovation Nouvelle Génération**

**Byld** est une plateforme de gestion de projets de rénovation immobilière conçue pour révolutionner le processus de rénovation. En combinant des technologies de pointe, une interface intuitive et des outils intelligents, Byld simplifie chaque étape de la rénovation, de la conception à la réalisation. L’objectif est de faciliter la collaboration entre particuliers et entreprises, tout en offrant une gestion optimisée des projets, grâce à l’IA, à la centralisation des documents et à un suivi en temps réel.

---

## 💡 **Vue d'ensemble du projet**

Byld est une solution numérique complète, unifiant un site web et une application mobile. Elle permet à la fois aux particuliers et aux professionnels du secteur de la rénovation de gérer leurs projets de manière efficace, transparente et fluide. L'interface intuitive de la plateforme et l’utilisation d'outils performants garantissent un suivi optimal des travaux, une communication fluide et une gestion simplifiée des documents.

### **Public Cible :**

- **Particuliers (Clients)** : Gérer leurs projets de rénovation avec des outils avancés pour le suivi des travaux, la gestion des devis et des paiements, et la planification des différentes étapes.
- **Professionnels (Entreprises de rénovation)** : Recevoir des demandes de devis, gérer plusieurs projets simultanément, suivre l’avancement des travaux et interagir de manière transparente avec les clients.

---

## 📋 **Fonctionnalités Clés**

1. **💬 Communication Instantanée et Collaborative :**  
   Un chat intégré permettant d’échanger des messages, de poser des questions, d’envoyer des photos et de discuter en temps réel des avancements ou des ajustements nécessaires.

2. **📅 Planification Dynamique et IA :**  
   L’IA optimise le planning des travaux en temps réel, prenant en compte les disponibilités des entreprises, la durée estimée des tâches et les contraintes spécifiques à chaque projet.

3. **📂 Centralisation Documentaire :**  
   Les utilisateurs peuvent importer et organiser tous les documents relatifs au projet (plans, photos, devis, contrats), accessibles à tout moment et en toute sécurité.

4. **🖼️ Visualisation Interactive du Projet :**  
   Les clients peuvent ajouter des photos de leur bien avant rénovation, puis simuler les modifications visuelles des matériaux, couleurs et autres éléments pour une prise de décision éclairée.

5. **📊 Tableau de Bord Personnalisé :**  
   Un espace centralisé fournissant une vue d’ensemble des métriques clés : avancée des travaux, délais, budgets, disponibilité des équipes et autres informations pertinentes.

6. **💳 Gestion des Devis et Financements :**  
   Créez et soumettez des documents financiers détaillés pour le financement du projet, et assurez un suivi des paiements et des étapes administratives.

---

## 🚀 **Processus de Gestion de Projet avec Byld**

### 1. **Création du Compte Client :**  
   Le client crée un compte pour centraliser toutes les informations et documents relatifs à son projet de rénovation.

### 2. **Création du Projet de Rénovation :**  
   Le client renseigne toutes les données nécessaires : type de travaux, spécifications techniques, matériaux souhaités, photos avant rénovation et plans du bien.

### 3. **Sélection des Entreprises et Demande de Devis :**  
   Le client invite des entreprises via la plateforme pour soumettre des devis, en utilisant un lien sécurisé ou un QR code personnalisé.

### 4. **Réception et Comparaison des Devis :**  
   Les entreprises soumettent leurs devis détaillés. Le client peut comparer facilement les propositions en termes de prix, délais et conditions.

### 5. **Suivi du Financement et Documentation :**  
   Le client peut générer des documents pour soumettre à une institution bancaire ou de financement.

### 6. **Planification et Suivi des Travaux :**  
   À l'aide d'un calendrier dynamique généré automatiquement, les travaux sont planifiés et peuvent être ajustés en fonction des imprévus.

### 7. **Gestion des Problèmes et Avancements :**  
   Toute mise à jour ou retard peut être signalé via le chat, et le planning est ajusté en conséquence.

### 8. **Finalisation du Projet :**  
   Après la fin des travaux, le client peut importer des photos de la rénovation achevée et générer des documents de clôture, incluant le suivi financier et des certificats de conformité.

---

## 🛠 **Technologies et Architecture de Byld**

Byld repose sur des technologies modernes, robustes et évolutives, garantissant une expérience fluide et rapide pour tous les utilisateurs.

### **Frontend :**
- **Next.js** et **React** pour une interface utilisateur rapide et réactive.
- **Tailwind CSS** pour une conception élégante et flexible, adaptée à tous les types d'appareils.

### **Backend :**
- **Node.js** et **Express.js** pour la gestion des API et des services backend.
- **Prisma ORM** avec **PostgreSQL** pour une gestion de base de données performante et flexible.

### **Intelligence Artificielle :**
- Algorithmes d’optimisation pour l'automatisation du planning des travaux, l'estimation des délais et la gestion des ressources.

### **Sécurité :**
- Authentification et gestion sécurisée des utilisateurs avec **JWT** et **OAuth** (intégration Google et GitHub).

### **Temps Réel :**
- **WebSockets** pour un chat en temps réel et des notifications instantanées sur l’avancement des projets.

---

## 🎯 **Architecture de l'Application**

L'architecture est conçue pour être modulaire et extensible, facilitant les mises à jour et l’ajout de nouvelles fonctionnalités.

```
Byld/
├───src/
│   ├───config/
│   │   └───database.ts                      # Configuration de la base de données
│   ├───models/
│   │   ├───enums/
│   │   │   ├───UserRole.ts                  # Enumération pour les rôles utilisateurs
│   │   │   ├───SubscriptionType.ts           # Enumération pour les types d'abonnement
│   │   │   ├───SubscriptionStatus.ts         # Enumération pour les statuts d'abonnement
│   │   │   ├───PaymentStatus.ts              # Enumération pour les statuts de paiement
│   │   │   ├───PaymentType.ts                # Enumération pour les types de paiement
│   │   │   ├───PaymentMethod.ts              # Enumération pour les méthodes de paiement
│   │   │   ├───ProjectStatus.ts              # Enumération pour les statuts de projet
│   │   │   ├───WorkStatus.ts                 # Enumération pour les statuts de travail
│   │   │   ├───QuoteStatus.ts                # Enumération pour les statuts de devis
│   │   │   ├───DocumentType.ts               # Enumération pour les types de documents
│   │   │   ├───DocumentCategory.ts           # Enumération pour les catégories de documents
│   │   │   ├───UploadedFileType.ts           # Enumération pour les types de fichiers
│   │   │   ├───MessageStatus.ts              # Enumération pour les statuts de message
│   │   │   ├───TransactionStatus.ts          # Enumération pour les statuts de transaction
│   │   │   ├───NotificationType.ts           # Enumération pour les types de notification
│   │   │   ├───LogType.ts                     # Enumération pour les types de log
│   │   │   ├───TaskStatus.ts                  # Enumération pour les statuts de tâche
│   │   │   ├───InvitationStatus.ts            # Enumération pour les statuts d'invitation
│   │   │   ├───RefundStatus.ts                # Enumération pour les statuts de remboursement
│   │   │   ├───MaterialType.ts                # Enumération pour les types de matériaux
│   │   │   └───TradeType.ts                   # Enumération pour les types de métiers
│   │   ├───user/
│   │   │   ├───User.ts                        # Modèle utilisateur
│   │   │   ├───ClientProfile.ts               # Profil client
│   │   │   └───CompanyProfile.ts              # Profil d'entreprise
│   │   ├───project/
│   │   │   ├───Project.ts                     # Modèle de projet
│   │   │   ├───Task.ts                        # Modèle de tâche
│   │   │   ├───Quote.ts                       # Modèle de devis
│   │   │   ├───Document.ts                    # Modèle de document
│   │   │   ├───Planning.ts                    # Modèle de planification
│   │   │   └───WorkItem.ts                    # Modèle de poste de travail
│   │   ├───company/
│   │   │   ├───Company.ts                     # Modèle d'entreprise
│   │   │   ├───Review.ts                      # Modèle d'évaluation
│   │   │   └───Invitation.ts                  # Modèle d'invitation
│   │   ├───payment/
│   │   │   ├───Payment.ts                     # Modèle de paiement
│   │   │   ├───Invoice.ts                     # Modèle de facture
│   │   │   ├───Transaction.ts                 # Modèle de transaction
│   │   │   └───Refund.ts                      # Modèle de remboursement
│   │   ├───notification/
│   │   │   └───Notification.ts                # Modèle de notification
│   │   ├───message/
│   │   │   └───Message.ts                     # Modèle de message
│   │   ├───chat/
│   │   │   ├───ChatRoom.ts                    # Modèle de salle de chat
│   │   │   ├───ChatParticipant.ts             # Modèle de participant au chat
│   │   │   └───Message.ts                     # Modèle de message de chat
│   │   ├───upload/
│   │   │   └───UploadedFile.ts                # Modèle de fichier téléchargé
│   │   └───log/
│   │       └───Log.ts                         # Modèle de log
│   ├───controllers/
│   │   ├───UserController.ts                  # Contrôleur des utilisateurs
│   │   ├───ProjectController.ts               # Contrôleur des projets
│   │   ├───PaymentController.ts               # Contrôleur des paiements
│   │   └───MessageController.ts               # Contrôleur des messages
│   ├───services/
│   │   ├───UserService.ts                     # Service utilisateur
│   │   ├───ProjectService.ts                  # Service projet
│   │   └───PaymentService.ts                  # Service paiement
│   ├───repositories/
│   │   ├───UserRepository.ts                  # Répository utilisateur
│   │   ├───ProjectRepository.ts               # Répository projet
│   │   └───PaymentRepository.ts               # Répository paiement
│   ├───routes/
│   │   ├───userRoutes.ts                      # Routes utilisateur
│   │   ├───projectRoutes.ts                   # Routes projet
│   │   └───paymentRoutes.ts                   # Routes paiement
│   ├───api/
│   │   ├───auth/
│   │   │   ├───login.ts                       # Endpoint de connexion
│   │   │   ├───register.ts                    # Endpoint d'inscription
│   │   │   └───forgot-password.ts             # Endpoint de mot de passe oublié
│   │   ├───projects/
│   │   │   ├───create.ts                      # Endpoint créer un projet
│   │   │   ├───update.ts                      # Endpoint mettre à jour un projet
│   │   │   ├───delete.ts                      # Endpoint supprimer un projet
│   │   │   ├───list.ts                        # Endpoint lister les projets
│   │   │   └───get.ts                         # Endpoint obtenir un projet
│   │   ├───companies/
│   │   │   ├───list.ts                        # Endpoint lister les entreprises
│   │   │   └───get.ts                         # Endpoint obtenir une entreprise
│   │   ├───quotes/
│   │   │   ├───create.ts                      # Endpoint créer un devis
│   │   │   ├───update.ts                      # Endpoint mettre à jour un devis
│   │   │   ├───delete.ts                      # Endpoint supprimer un devis
│   │   │   └───list.ts                        # Endpoint lister les devis
│   │   ├───payments/
│   │   │   ├───create.ts                      # Endpoint créer un paiement
│   │   │   └───update.ts                      # Endpoint mettre à jour un paiement
│   │   └───notifications/
│   │       ├───list.ts                        # Endpoint lister les notifications
│   │       ├───create.ts                      # Endpoint créer une notification
│   │       └───update.ts                      # Endpoint mettre à jour une notification
│   ├───components/
│   │   ├───Header.tsx                         # Composant d'en-tête
│   │   ├───Footer.tsx                         # Composant de pied de page
│   │   ├───Navbar.tsx                         # Composant de barre de navigation
│   │   ├───ProjectCard.tsx                    # Carte projet
│   │   ├───ChatBubble.tsx                     # Bulle de chat
│   │   ├───NotificationBadge.tsx              # Insigne de notification
│   │   └───FileUploader.tsx                   # Composant d'upload de fichiers
│   ├───tests/
│   │   ├───unit/
│   │   │   ├───auth.test.ts                   # Tests unitaires pour l'authentification
│   │   │   ├───projects.test.ts               # Tests unitaires pour les projets
│   │   │   ├───companies.test.ts              # Tests unitaires pour les entreprises
│   │   └───integration/
│   │       ├───payment.test.ts                # Tests d'intégration pour les paiements
│   │       ├───chat.test.ts                   # Tests d'intégration pour le chat
│   │       └───quote.test.ts                  # Tests d'intégration pour les devis
├───.env                                        # Fichier d'environnement pour les variables sensibles
├───prisma/
│   ├───schema.prisma                           # Schéma de la base de données Prisma
│   └───seed.ts                                 # Fichier pour initialiser la base de données
├───tailwind.config.js                          # Configuration de Tailwind CSS
├───postcss.config.js                           # Configuration de PostCSS
├───next.config.js                              # Configuration de Next.js
├───tsconfig.json                               # Configuration TypeScript
├───package.json                                # Dépendances du projet
└───README.md                                   # Documentation du projet
```

---

## 🔧 **Installation et Configuration**

### **Prérequis :**

- **Node.js (v16 ou supérieure)**
- **PostgreSQL** pour la gestion des données
- **Redis** pour le cache (optionnel mais recommandé)
- **Prisma CLI** pour les migrations et la gestion des modèles de données

### **Installation :**

1. **Clonez le repository et installez les dépendances :**
   ```bash
   git clone git@github.com:ahmed-lazher/Byld.git
   cd byld-app
   npm install
   ```

2. **Configurez les variables d'environnement :**
   ```bash
   cp .env.example .env
   ```

3. **Appliquez les migrations :**
   ```bash
   npm run prisma:migrate
   ```

4. **Initialisez la base de données :**
   ```bash
   npm run prisma:seed
   ```

5. **Lancez l’application en mode développement :**
   ```bash
   npm run dev
   ```

---

## 📞 **Support et Contact**

Pour toute question, n’hésitez pas à nous contacter via les canaux suivants :

- **Email** : [support@byldapp.com](mailto:support@byldapp.com)
- **Site Web** : [byldapp.com](https://byldapp.com)
- **Twitter** : [@ByldApp](https://twitter.com/ByldApp)

---

## 📜 **Licence**

Byld App est distribué sous la licence **MIT**. Pour plus de détails, consultez le fichier [LICENSE](LICENSE).

---

Byld est conçu pour transformer la manière dont les projets de rénovation sont gérés, en offrant une plateforme moderne, collaborative et sécurisée pour simplifier chaque étape, des premières discussions à la finalisation des travaux.