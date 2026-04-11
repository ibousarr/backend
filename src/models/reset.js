import { hash } from "../lib/crypto.js";
import { sequelize } from "./index.js";
import { Project } from "./project.js";
import { User } from "./user.js";
import { Bon } from "./bon.js";

const resetDb = async() => {
    try {
        await sequelize.dropAllSchemas({ force: true });
        await sequelize.sync({ force: true });

        const names = ["Projet Ibou", "Projet Iso", "Projet Adja", "Projet Mouhamed", "Projet Neutre"];

        // Création d'un utilisateur
        const password = await hash('password')
        await User.create({
            username: 'kisarr',
            email: 'kisarr@gmail.com',
            password: password
        })
        await User.create({
            username: 'kisarrweb',
            email: 'kisarrweb@gmail.com',
            password: password
        })

        await User.create({
            username: 'username',
            email: 'username@gmail.com',
            password: password
        })


        // Création de trois projets portfolio
        const projects = [
            {
                name: names[0],
                description: "Un projet de portfolio réalisé avec React, Zustand et React-routeur-dom",
                image: "https://blog-fr.orson.io/wp-content/uploads/2017/08/Template-responsive-design.png"
            },
            {
                name: names[1],
                description: "Un projet e-commerce réalisé avec Node, PostGreSQL et express",
                image: "https://www.codeur.com/blog/wp-content/uploads/2022/07/4.-PlurielSingulier.jpg"
            },
            {
                name: names[2],
                description: "Un site vitrine réalisé avec Wordpress et PHP",
                image: "https://www.livepepper.fr/wp-content/uploads/page/site-vitrine-restaurant-livepepper-academy-1-1024x744.png"
            },
                {
                name: names[3],
                description: "Un projet de blog réalisé avec Django et Python",
                image: "https://www.codeur.com/blog/wp-content/uploads/2022/07/4.-PlurielSingulier.jpg"
            },
            {
                name: names[4],
                description: "Un projet de portfolio réalisé avec React, Zustand et React-routeur-dom",
                image: "https://blog-fr.orson.io/wp-content/uploads/2017/08/Template-responsive-design.png"
            },
        ]
        await Project.bulkCreate(projects)

        // creation de deux bons de commande
        const bons = [
            {
                code: "BC-001",
                title: "Bon de commande 1",
                description: "Bon de commande pour l'achat de matériel informatique",
                dueDate: new Date('2026-12-31'),
                articles: [
                    { name: "Ordinateur portable", quantity: 2, price: 1200 },
                    { name: "Souris sans fil", quantity: 5, price: 2500 },
                    { name: "Clavier mécanique", quantity: 3, price: 8000 },
                    { name: "Écran 24 pouces", quantity: 4, price: 30000 }
                ],
                montant: 612500,
                status: 3,
                paid: false,
                userId: 1
            },
            {
                code: "BC-002",
                title: "Bon de commande 2",
                description: "Bon de commande pour l'achat de fournitures de bureau",
                dueDate: new Date('2026-11-30'),
                articles: [
                    { name: "Papier A4", quantity: 10, price: 5 },
                    { name: "Stylos à bille", quantity: 20, price: 1.5 },
                    { name: "Agrafeuse", quantity: 2, price: 15 }
                ],
                montant: 110,
                status: 2,
                paid: true,
                userId: null
            },
        ]
        await Bon.bulkCreate(bons)

        await sequelize.close()
    } catch(e) {
        console.error('Erreur lors de l\'exécution du script:', e);
    }
}

resetDb()
