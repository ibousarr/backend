import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";


export class Bon extends Model {}

/**
 * Represents a Bon model.
 * 
 * @class Bon
 * @extends Model
 * 
 * @property {string} code - The code of the bon.
 * @property {string} title - The title of the bon.
 * @property {string} description - The description of the bon.
 * @property {Date} dueDate - The due date of the bon.
 * @property {Array} articles - The articles of the bon.
 * @property {number} montant - The amount of the bon.
 * @property {number} status - The status of the bon.
 * @property {boolean} paid - The paid status of the bon.
 * @property {string} userId - The userId of the bon.
 */

Bon.init({
    /**
     * The code of the bon.
     * @type {string}
     */
    code: { type: DataTypes.STRING },

    /**
     * The description of the bon.
     * @type {string}
     */
    title: { type: DataTypes.STRING },

    /**
     * The description of the bon.
     * @type {string}
     */
    description: { type: DataTypes.STRING, allowNull: true },

    /**
     * The due date of the bon.
     * @type {Date}
     */

    dueDate: { type: DataTypes.DATE, allowNull: true, defaultValue: null },

     /**
     * The articles of the bon.
     * @type {Array}
     */
    articles: { type: DataTypes.JSON, allowNull: true, defaultValue: [] },

    /**
     * The amount of the bon.
     * @type {number}
     */
    montant: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0 },

    /**
     * The status of the bon.
     * @type {number}
     */
    status: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 1 },

    /**
     * The paid status of the bon.
     * @type {boolean}
     */
    paid: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },

    /**
     * The userId of the bon.
     * @type {string}
     */
    userId: { type: DataTypes.STRING, allowNull: true, defaultValue: null },

}, { sequelize, tableName: 'Bons' });
