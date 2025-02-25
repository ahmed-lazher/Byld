import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Assurez-vous que dotenv est installé et configuré pour charger les variables d'environnement
dotenv.config();

// Récupérer DATABASE_URL depuis .env
const DATABASE_URL = process.env.DATABASE_URL as string;  // Typage explicite de `DATABASE_URL`

// Vérification si DATABASE_URL est définie
if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

// Configurez l'instance Sequelize en utilisant DATABASE_URL
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,  // Optionnel : vous pouvez activer ou désactiver la journalisation des requêtes SQL
});

// Importer les modèles depuis le fichier d'index
import models from '../models';

// Synchroniser les modèles avec la base de données
Object.values(models).forEach((model) => {
  if (model && model.associate) {
    model.associate(sequelize.models);
  }
});

// Test de la connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });

export { sequelize, models };
