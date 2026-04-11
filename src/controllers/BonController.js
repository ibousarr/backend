import { Bon } from '../models/bon.js';

export default class BonController {
  /**
   * Retrieves all bons from the database.
   * 
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Promise<void>}
   */
  static async getAllBons(_, res) {
    try {
      const bons = await Bon.findAll();
      res.status(200).json(bons);
    } catch (error) {
      console.error('Error fetching bons:', error);
      res.status(500).json({ error: 'An error occurred while fetching bons.' });
    }
  }

  /**
   * Retrieves a single bon by its ID.
   * 
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Promise<void>}
   */
  static async getBonById(req, res) {
    const { id } = req.params;
    try {
      const bon = await Bon.findByPk(id);
      if (!bon) {
        return res.status(404).json({ error: 'Bon not found.' });
      }
      res.status(200).json(bon);
    } catch (error) {
      console.error(`Error fetching bon with ID ${id}:`, error);
      res.status(500).json({ error: 'An error occurred while fetching the bon.' });
    }
  }

  /**
   * Controller pour ajouter un nouveau bon
   * @param {object} req - Requête Express
   * @param {object} res - Réponse Express
   */
  static async addBon(req, res) {
    try {
      const { code, title, description, dueDate, articles, montant } = req.body;

      // Validation simple des champs requis
      if (!code || !title) {
        return res.status(400).json({ error: 'Les champs "code" et "title" sont obligatoires.' });
      }

      // Création du bon
      const newBon = await Bon.create({ code, title, description, dueDate, articles, montant });

      return res.status(201).json({
        message: 'Bon créé avec succès !',
        bon: newBon
      });
    } catch (error) {
      console.error('Error creating bon:', error);
      res.status(500).json({ error: 'An error occurred while creating the bon.' });
    }
  }
  static async updateBon(req, res) {
    const { id } = req.params;
    const { code, title, description, dueDate, articles, montant } = req.body;

    try {
      const bon = await Bon.findByPk(id);
      if (!bon) {
        return res.status(404).json({ error: 'Bon not found.' });
      }

      // Mise à jour des champs du bon
      bon.code = code || bon.code;
      bon.title = title || bon.title;
      bon.description = description || bon.description;
      bon.dueDate = dueDate || bon.dueDate;
      bon.articles = articles || bon.articles;
      bon.montant = montant || bon.montant;

      await bon.save();

      res.status(200).json({
        message: 'Bon mis à jour avec succès !',
        bon
      });
    } catch (error) {
      console.error(`Error updating bon with ID ${id}:`, error);
      res.status(500).json({ error: 'An error occurred while updating the bon.' });
    }
  }

    static async deleteBon(req, res) {
    const { id } = req.params;

    try {
      const bon = await Bon.findByPk(id);
      if (!bon) {
        return res.status(404).json({ error: 'Bon not found.' });
      }

      await bon.destroy();

      res.status(200).json({ message: 'Bon deleted successfully!' });
    } catch (error) {
      console.error(`Error deleting bon with ID ${id}:`, error);
      res.status(500).json({ error: 'An error occurred while deleting the bon.' });
    }
  }
}  