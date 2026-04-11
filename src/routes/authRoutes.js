import express from "express";
import AuthController from "../controllers/AuthController.js";

// Express app
const app = express();

// Authentication routes
/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
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
 *                   username:
 *                     type: string
 *                     example: johndoe
 *                   email:
 *                     type: string
 *                     example: johndoe@example.com
*/
app.get("/users", AuthController.getAllUsers);

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Login a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Moi Username
 *               username:
 *                 type: string
 *                 example: username
 *               email:
 *                 type: string
 *                 example: username@gmail.com
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         description: signup successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: johndoe
 *       400:
 *         description: Bad request
 *       401:
 *        description: Unauthorized
 */
app.post("/signup", AuthController.signupUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *       400:
 *         description: Bad request
 *     401:
 *        description: Unauthorized
 */
app.post("/login", AuthController.loginUser);

/**
 * @swagger
 * /auth/logout:
 *   delete:
 *     summary: Logout a user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Logout successful
 *       400:
 *         description: Bad request
 */
app.delete("/logout", AuthController.logout);

export default app;
