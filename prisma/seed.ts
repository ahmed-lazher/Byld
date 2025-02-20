import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;

async function hashPassword(password: string) {
  return bcrypt.hash(password, saltRounds);
}

async function main() {
  console.log("Seeding database...");

  // Hash des mots de passe
  const hashedPassword = await hashPassword("password");

  // Transaction pour garantir l'intégrité des données
	const transaction = await prisma.$transaction([
	  // Suppression des données dans les tables enfants (qui dépendent d'autres tables)
	  prisma.activityLog.deleteMany(),
	  prisma.notification.deleteMany(),
	  prisma.message.deleteMany(),
	  prisma.review.deleteMany(),
	  prisma.payment.deleteMany(),
	  prisma.task.deleteMany(),
	  prisma.chat.deleteMany(),
	  prisma.document.deleteMany(),
	  prisma.quote.deleteMany(),
	  prisma.projectCompany.deleteMany(),

	  // Suppression des données dans les tables principales
	  prisma.subscription.deleteMany(),
	  prisma.profile.deleteMany(),
	  prisma.project.deleteMany(),
	  prisma.company.deleteMany(),
	  prisma.user.deleteMany()
	]);


  console.log("Database cleared successfully.");

  // Insertion des utilisateurs avec mot de passe haché
  const users = await prisma.user.createMany({
    data: [
      { id: "1", email: "alice@example.com", password: hashedPassword, role: "USER" },
      { id: "2", email: "pro@example.com", password: hashedPassword, role: "PRO" },
      { id: "3", email: "admin@example.com", password: hashedPassword, role: "ADMIN" },
    ],
    skipDuplicates: true,
  });

  // Insertion des profils utilisateurs
  const profiles = await prisma.profile.createMany({
    data: [
      { id: "1", userId: "1", firstName: "Alice", lastName: "Dupont", phone: "123456789", address: "Paris" },
      { id: "2", userId: "2", firstName: "Entreprise", lastName: "XYZ", phone: "987654321", address: "Lyon" },
    ],
  });

  // Insertion des abonnements
  const subscriptions = await prisma.subscription.createMany({
    data: [
      { id: "1", userId: "1", plan: "Basic", startDate: new Date(), endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: "ACTIVE" },
      { id: "2", userId: "2", plan: "Premium", startDate: new Date(), endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: "ACTIVE" },
    ],
  });

  // Insertion de l'entreprise pour le professionnel
  const company = await prisma.company.create({
    data: {
      id: "1",
      userId: "2",
      name: "Entreprise XYZ",
      industry: "Rénovation",
      description: "Spécialiste en rénovation intérieure.",
    },
  });

  // Insertion des projets
  const project = await prisma.project.create({
    data: {
      id: "1",
      userId: "1",
      name: "Rénovation Appartement Paris",
      location: "Paris",
      floor: 3,
      rooms: 4,
      description: "Modernisation complète de l'intérieur.",
      technicalInfo: "Matériaux haut de gamme",
      status: "IN_PROGRESS",
    },
  });

  // Association des entreprises aux projets
  await prisma.projectCompany.create({
    data: {
      id: "1",
      projectId: project.id,
      companyId: company.id,
    },
  });

  // Création des devis avec des détails supplémentaires
  const quote = await prisma.quote.create({
    data: {
      id: "1",
      projectId: project.id,
      companyId: company.id,
      totalCost: 15000,
      details: { services: ["Peinture", "Électricité", "Plomberie"] },
      estimatedDuration: 30,
      status: "PENDING",
    },
  });

  // Création des tâches avec des dates d'échéance et des priorités
  await prisma.task.createMany({
    data: [
      { id: "1", projectId: project.id, title: "Démolition", description: "Enlever les anciens revêtements.", status: "PENDING", endDate: new Date("2025-03-01"), priority: "HIGH" },
      { id: "2", projectId: project.id, title: "Peinture", description: "Application de nouvelles couleurs.", status: "IN_PROGRESS", endDate: new Date("2025-03-10"), priority: "MEDIUM" },
      { id: "3", projectId: project.id, title: "Plomberie", description: "Remplacement des tuyaux", status: "PENDING", endDate: new Date("2025-03-15"), priority: "LOW" },
    ],
  });

  // Création des paiements
  await prisma.payment.create({
    data: {
      id: "1",
      userId: "1",
      amount: 5000,
      status: "SUCCESS",
      paymentDate: new Date(),
    },
  });

  // Création des documents associés au projet
  await prisma.document.createMany({
    data: [
      { id: "1", projectId: project.id, type: "PLAN", url: "https://example.com/plan.pdf" },
      { id: "2", projectId: project.id, type: "PHOTO", url: "https://example.com/photo.jpg" },
    ],
  });

  // Création des notifications pour les utilisateurs
  await prisma.notification.createMany({
    data: [
      { id: "1", userId: "1", content: "Votre projet a été mis à jour.", isRead: false, createdAt: new Date() },
      { id: "2", userId: "2", content: "Un nouveau devis a été soumis.", isRead: false, createdAt: new Date() },
    ],
  });

  // Création des avis pour l'entreprise
  await prisma.review.create({
    data: {
      id: "1",
      userId: "1",
      companyId: company.id,
      rating: 4.5,
      comment: "Très bon service, équipe professionnelle.",
      createdAt: new Date(),
    },
  });

  // Création du chat et des messages
  await prisma.chat.create({
    data: {
      id: "1",
      projectId: project.id,
      messages: {
        create: [
          { id: "1", userId: "1", content: "Bonjour, pouvez-vous me donner un devis ?" },
          { id: "2", userId: "2", content: "Bien sûr, nous allons l'établir." },
        ],
      },
    },
  });

  // Ajout des logs d'activité
  await prisma.activityLog.createMany({
    data: [
      { id: "1", userId: "1", projectId: project.id, action: "Création du projet", createdAt: new Date() },
      { id: "2", userId: "2", projectId: project.id, action: "Soumission d'un devis", createdAt: new Date() },
      { id: "3", userId: "1", projectId: project.id, action: "Révision du devis", createdAt: new Date() },
    ],
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
