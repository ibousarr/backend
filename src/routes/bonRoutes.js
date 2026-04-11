import express from "express";
import BonController from "../controllers/BonController";

const app = express();

/**
 * @swagger
 * /bons:
 *   get:
 *     summary: Récupère tous les bons.
 *     description: Retourne la liste complète des bons enregistrés dans la base de données.
 *     tags:
 *       - Bons
 *     responses:
 *       200:
 *         description: Liste des bons récupérée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   code:
 *                     type: string
 *                     example: BON-001
 *                   title:
 *                     type: string
 *                     example: Bon important
 *                   description:
 *                     type: string
 *                     example: Un bon important pour l'équipe.
 *                   articles:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         name:
 *                           type: string
 *                           example: Article 1
 *                         quantity:
 *                           type: integer
 *                           example: 10
 *                   montant:
 *                     type: number
 *                     format: float
 *                     example: 100.00
 *                   dueDate:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-01-01T10:00:00Z
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-01-01T10:00:00Z
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-01-02T12:00:00Z
 *       500:
 *         description: Une erreur est survenue lors de la récupération des bons.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Une erreur est survenue lors de la récupération des bons.
 */
app.get("/", BonController.getAllBons);

/**
 * @swagger
 * /bons/{id}:
 *   get:
 *     summary: Récupère un bon par son ID.
 *     description: Retourne les détails d'un bon spécifique en fonction de son ID.
 *     tags:
 *       - Bons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du bon à récupérer.
 *     responses:
 *       200:
 *         description: Bon récupéré avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 code:
 *                   type: string
 *                   example: BON-001
 *                 title:
 *                   type: string
 *                   example: Bon important
 *                 description:
 *                   type: string
 *                   example: Un bon important pour l'équipe.
 *                 articles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Article 1
 *                       quantity:
 *                         type: integer
 *                         example: 10
 *                 montant:
 *                   type: number
 *                   format: float
 *                   example: 100.00
 *                 dueDate:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-01-01T10:00:00Z
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-01-01T10:00:00Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-01-02T12:00:00Z
 *       404:
 *         description: Bon non trouvé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Bon non trouvé.
 */
app.get("/:id", BonController.getBonById);

/**
 * @swagger
 * /bons/create:
 *   post:
 *     summary: Crée un nouveau bon.
 *     description: Ajoute un nouveau bon à la base de données avec les informations fournies.
 *     tags:
 *       - Bons
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: BON-002
 *               title:
 *                 type: string
 *                 example: Nouveau bon important
 *               description:
 *                 type: string
 *                 example: Un autre bon important pour l'équipe.
 *               articles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: Article 2
 *                     quantity:
 *                       type: integer
 *                       example: 5
 *                     price:
 *                       type: number
 *                       format: float
 *                       example: 10.00
 *               montant:
 *                 type: number
 *                 format: float
 *                 example: 50.00
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-02-01T10:00:00Z
 *     responses:
 *       201:
 *         description: Bon créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bon créé avec succès !
 *                 bon:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     code:
 *                       type: string
 *                       example: BON-002
 *                     title:
 *                       type: string
 *                       example: Nouveau bon important
 *                     description:
 *                       type: string
 *                       example: Un autre bon important pour l'équipe.
 *                     articles:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 2
 *                           name:
 *                             type: string
 *                             example: Article 2
 *                           quantity:
 *                             type: integer
 *                             example: 5
 *                     montant:
 *                       type: number
 *                       format: float
 *                       example: 50.00
 *                     dueDate:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-02-01T10:00:00Z
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-01-15T10:00:00Z
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-01-15T10:00:00Z
 *       500:
 *         description: Une erreur est survenue lors de la création du bon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Une erreur est survenue lors de la création du bon.
 */
app.post("/create", BonController.addBon);

/**
 * @swagger
 * /bons/{id}:
 *   put:
 *     summary: Met à jour un bon existant.
 *     description: Modifie les détails d'un bon spécifique en fonction de son ID.
 *     tags:
 *       - Bons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du bon à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: BON-002
 *               title:
 *                 type: string
 *                 example: Bon mis à jour
 *               description:
 *                 type: string
 *                 example: Un bon mis à jour pour l'équipe.
 *               articles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: Article 2
 *                     quantity:
 *                       type: integer
 *                       example: 5
 *               montant:
 *                 type: number
 *                 format: float
 *                 example: 50.00
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-02-01T10:00:00Z
 *     responses:
 *       200:
 *         description: Bon mis à jour avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bon mis à jour avec succès !
 *                 bon:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     code:
 *                       type: string
 *                       example: BON-002
 *                     title:
 *                       type: string
 *                       example: Bon mis à jour
 *                     description:
 *                       type: string
 *                       example: Un bon mis à jour pour l'équipe.
 *                     articles:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 2
 *                           name:
 *                             type: string
 *                             example: Article 2
 *                           quantity:
 *                             type: integer
 *                             example: 5
 *                     montant:
 *                       type: number
 *                       format: float
 *                       example: 50.00
 *                     dueDate:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-02-01T10:00:00Z
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-01-15T10:00:00Z
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-01-20T10:00:00Z
 *       404:
 *         description: Bon non trouvé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Bon non trouvé.
 *       500:
 *         description: Une erreur est survenue lors de la mise à jour du bon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Une erreur est survenue lors de la mise à jour du bon.
 */
app.put("/:id", BonController.updateBon);

/**
 * @swagger
 * /bons/{id}:
 *   delete:
 *     summary: Supprime un bon existant.
 *     description: Supprime un bon spécifique en fonction de son ID.
 *     tags:
 *       - Bons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du bon à supprimer.
 *     responses:
 *       200:
 *         description: Le bon a été supprimé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bon supprimé avec succès !
 *       404:
 *         description: Bon non trouvé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Bon non trouvé.
 */
app.delete("/:id", BonController.deleteBon);

export default app;
