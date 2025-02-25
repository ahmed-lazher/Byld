import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Fonction pour le hashage des mots de passe
const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, 10);
};

async function main() {
    // Création des utilisateurs
    const users = await Promise.all([
        // Clients
        prisma.user.create({
            data: {
                email: 'client1@example.com',
                passwordHash: hashPassword('password123'),
                name: 'Alice Dupont',
                role: 'CLIENT',
            },
        }),
        prisma.user.create({
            data: {
                email: 'client2@example.com',
                passwordHash: hashPassword('password123'),
                name: 'Benoit Martin',
                role: 'CLIENT',
            },
        }),
        prisma.user.create({
            data: {
                email: 'client3@example.com',
                passwordHash: hashPassword('password123'),
                name: 'Claire Leroy',
                role: 'CLIENT',
            },
        }),
        // Entreprises
        prisma.user.create({
            data: {
                email: 'company1@example.com',
                passwordHash: hashPassword('password123'),
                name: 'Société de Rénovation SA',
                role: 'COMPANY',
            },
        }),
        prisma.user.create({
            data: {
                email: 'company2@example.com',
                passwordHash: hashPassword('password123'),
                name: 'Maçons Experts',
                role: 'COMPANY',
            },
        }),
        prisma.user.create({
            data: {
                email: 'company3@example.com',
                passwordHash: hashPassword('password123'),
                name: 'Électriciens Unis',
                role: 'COMPANY',
            },
        }),
        // Administrateur
        prisma.user.create({
            data: {
                email: 'admin@example.com',
                passwordHash: hashPassword('adminpassword'),
                name: 'Admin Système',
                role: 'ADMIN',
            },
        }),
    ]);

    // Création de profils clients
    const clientProfiles = await Promise.all([
        prisma.clientProfile.create({
            data: {
                userId: users[0].id,
                firstName: 'Alice',
                lastName: 'Dupont',
                phone: '01 23 45 67 89',
                address: '5 Rue de la République, Paris',
            },
        }),
        prisma.clientProfile.create({
            data: {
                userId: users[1].id,
                firstName: 'Benoit',
                lastName: 'Martin',
                phone: '01 23 45 67 90',
                address: '10 Avenue de France, Lyon',
            },
        }),
        prisma.clientProfile.create({
            data: {
                userId: users[2].id,
                firstName: 'Claire',
                lastName: 'Leroy',
                phone: '01 23 45 67 91',
                address: '15 Boulevard Saint-Germain, Paris',
            },
        }),
    ]);

    // Création de profils d'entreprises
    const companyProfiles = await Promise.all([
        prisma.companyProfile.create({
            data: {
                userId: users[3].id,
                companyName: 'Société de Rénovation SA',
                address: '1 Place des Victoires, Paris',
                phone: '01 12 34 56 78',
                qualifications: 'Qualibat RGE',
            },
        }),
        prisma.companyProfile.create({
            data: {
                userId: users[4].id,
                companyName: 'Maçons Experts',
                address: '22 Rue de la Construction, Marseille',
                phone: '01 98 76 54 32',
                qualifications: 'Artisan Qualifié',
            },
        }),
        prisma.companyProfile.create({
            data: {
                userId: users[5].id,
                companyName: 'Électriciens Unis',
                address: '34 Avenue de l’Innovation, Lyon',
                phone: '01 45 67 89 01',
                qualifications: 'Artisan Électricien',
            },
        }),
    ]);

    // Création d'abonnements
    const subscriptions = await Promise.all([
        prisma.subscription.create({
            data: {
                type: 'ANNUAL',
                status: 'ACTIVE',
                client: { connect: { id: clientProfiles[0].id } },
            },
        }),
        prisma.subscription.create({
            data: {
                type: 'CREDIT',
                status: 'ACTIVE',
                client: { connect: { id: clientProfiles[1].id } },
            },
        }),
        prisma.subscription.create({
            data: {
                type: 'ANNUAL',
                status: 'ACTIVE',
                client: { connect: { id: clientProfiles[2].id } },
            },
        }),
    ]);

    // Création de projets
    const projects = await Promise.all([
        prisma.project.create({
            data: {
                name: 'Rénovation Appartement Paris',
                location: '5 Rue de la République, Paris',
                floor: 2,
                roomCount: 4,
                client: { connect: { id: clientProfiles[0].id } },
                status: 'DRAFT',
            },
        }),
        prisma.project.create({
            data: {
                name: 'Rénovation Maison Lyon',
                location: '10 Avenue de France, Lyon',
                floor: 1,
                roomCount: 6,
                client: { connect: { id: clientProfiles[1].id } },
                status: 'DRAFT',
            },
        }),
        prisma.project.create({
            data: {
                name: 'Rénovation Bureau Paris',
                location: '15 Boulevard Saint-Germain, Paris',
                floor: 3,
                roomCount: 3,
                client: { connect: { id: clientProfiles[2].id } },
                status: 'DRAFT',
            },
        }),
    ]);

    // Création de devis
    const quotes = await Promise.all([
        prisma.quote.create({
            data: {
                company: { connect: { id: companyProfiles[0].id } },
                project: { connect: { id: projects[0].id } },
                estimatedAmount: 15000,
                estimatedDuration: 30,
                status: 'PENDING',
            },
        }),
        prisma.quote.create({
            data: {
                company: { connect: { id: companyProfiles[1].id } },
                project: { connect: { id: projects[1].id } },
                estimatedAmount: 25000,
                estimatedDuration: 45,
                status: 'PENDING',
            },
        }),
        prisma.quote.create({
            data: {
                company: { connect: { id: companyProfiles[2].id } },
                project: { connect: { id: projects[2].id } },
                estimatedAmount: 12000,
                estimatedDuration: 20,
                status: 'PENDING',
            },
        }),
    ]);

    // Création de travaux associés à chaque projet
    const workItems = await Promise.all([
        prisma.workItem.create({
            data: {
                description: 'Peinture salon et couloir',
                project: { connect: { id: projects[0].id } },
                quantity: 100,
            },
        }),
        prisma.workItem.create({
            data: {
                description: 'Changement de fenêtres',
                project: { connect: { id: projects[0].id } },
                quantity: 5,
            },
        }),
        prisma.workItem.create({
            data: {
                description: 'Rénovation cuisine complète',
                project: { connect: { id: projects[1].id } },
                quantity: 1,
            },
        }),
        prisma.workItem.create({
            data: {
                description: 'Installation électrique complète',
                project: { connect: { id: projects[2].id } },
                quantity: 1,
            },
        }),
    ]);

    // Création de détails de devis associés
    await Promise.all([
        prisma.quoteDetail.create({
            data: {
                quote: { connect: { id: quotes[0].id } },
                workItem: { connect: { id: workItems[0].id } },
                price: 2000,
                duration: 10,
            },
        }),
        prisma.quoteDetail.create({
            data: {
                quote: { connect: { id: quotes[0].id } },
                workItem: { connect: { id: workItems[1].id } },
                price: 5000,
                duration: 15,
            },
        }),
        prisma.quoteDetail.create({
            data: {
                quote: { connect: { id: quotes[1].id } },
                workItem: { connect: { id: workItems[2].id } },
                price: 18000,
                duration: 30,
            },
        }),
        prisma.quoteDetail.create({
            data: {
                quote: { connect: { id: quotes[2].id } },
                workItem: { connect: { id: workItems[3].id } },
                price: 5000,
                duration: 15,
            },
        }),
    ]);

    // Création d'éléments de matériau
    const materials = await Promise.all([
        prisma.material.create({
            data: {
                name: 'Peinture Blanche',
                type: 'PAINT',
                unitPrice: 30,
                quantity: 100,
                project: { connect: { id: projects[0].id } },
            },
        }),
        prisma.material.create({
            data: {
                name: 'Fenêtres PVC',
                type: 'OTHER',
                unitPrice: 300,
                quantity: 5,
                project: { connect: { id: projects[0].id } },
            },
        }),
        prisma.material.create({
            data: {
                name: 'Carrelage',
                type: 'TILE',
                unitPrice: 45,
                quantity: 250,
                project: { connect: { id: projects[1].id } },
            },
        }),
        prisma.material.create({
            data: {
                name: 'Câblage Électrique',
                type: 'OTHER',
                unitPrice: 50,
                quantity: 100, // mètres
                project: { connect: { id: projects[2].id } },
            },
        }),
    ]);

    // Création de réunions de chantier
    const meetings = await Promise.all([
        prisma.meeting.create({
            data: {
                project: { connect: { id: projects[0].id } },
                proposedDates: JSON.stringify(['2023-10-01', '2023-10-02']),
                status: 'PENDING',
            },
        }),
        prisma.meeting.create({
            data: {
                project: { connect: { id: projects[1].id } },
                proposedDates: JSON.stringify(['2023-10-03', '2023-10-04']),
                status: 'PENDING',
            },
        }),
    ]);

    // Création de mises à jour de projet
    await Promise.all([
        prisma.projectUpdate.create({
            data: {
                project: { connect: { id: projects[0].id } },
                user: { connect: { id: users[3].id } },
                title: 'Avancement des travaux',
                description: 'Peinture terminée et fenêtres posées.',
                severity: 2,
            },
        }),
        prisma.projectUpdate.create({
            data: {
                project: { connect: { id: projects[1].id } },
                user: { connect: { id: users[4].id } },
                title: 'Problème détecté',
                description: 'Retard sur l\'approvisionnement du carrelage.',
                severity: 5,
            },
        }),
        prisma.projectUpdate.create({
            data: {
                project: { connect: { id: projects[2].id } },
                user: { connect: { id: users[5].id } },
                title: 'Mise à jour',
                description: 'Préparation de l\'installation électrique.',
                severity: 1,
            },
        }),
    ]);

	// Création d'invitations à des projets
	const invitations = await Promise.all([
		prisma.invitation.create({
			data: {
				token: 'InvitationToken1',
				email: 'contact@company1.com',
				project: { connect: { id: projects[0].id } },
				sender: { connect: { id: users[0].id } },
				recipient: { connect: { id: users[3].id } },
				expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Expires in 24 hours
			},
		}),
		prisma.invitation.create({
			data: {
				token: 'InvitationToken2',
				email: 'contact@company2.com',
				project: { connect: { id: projects[1].id } },
				sender: { connect: { id: users[1].id } },
				recipient: { connect: { id: users[4].id } },
				expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Expires in 24 hours
			},
		}),
		prisma.invitation.create({
			data: {
				token: 'InvitationToken3',
				email: 'contact@company3.com',
				project: { connect: { id: projects[2].id } },
				sender: { connect: { id: users[2].id } },
				recipient: { connect: { id: users[5].id } },
				expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Expires in 24 hours
			},
		}),
	]);

    // Création de logs d'activité
    await Promise.all([
        prisma.log.create({
            data: {
                userId: users[0].id,
                type: 'INFO',
                message: 'Alice a créé un nouveau projet pour rénovation à Paris.',
                action: 'CREATE_PROJECT',
            },
        }),
        prisma.log.create({
            data: {
                userId: users[3].id,
                type: 'INFO',
                message: 'Société de Rénovation SA a soumis un devis pour le projet à Paris.',
                action: 'SUBMIT_QUOTE',
            },
        }),
        prisma.log.create({
            data: {
                userId: users[1].id,
                type: 'WARNING',
                message: 'Benoit a signalé un problème d’approvisionnement.',
                action: 'REPORT_ISSUE',
            },
        }),
        prisma.log.create({
            data: {
                userId: users[5].id,
                type: 'INFO',
                message: 'Électriciens Unis préparant les installations électriques dans le projet de bureau.',
                action: 'PREPARE_WORK',
            },
        }),
    ]);

    console.log("Seed data created successfully");
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });