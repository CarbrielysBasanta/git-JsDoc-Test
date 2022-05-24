const express = require('express')
const app = express();

/**
 * @module api
 */

/**
 * Index Route
 * 
 * @name Index
 * @path {GET} / 
 * 
 */
app.get('/', (req, res) => res.send('Welcome'))

/**
 * Index Route
 * @name Users
 * @path {POST} /users
 * 
 */
app.post('/users', (req, res) => res.send('Welcome'))

/**
 * Index Route
 * 
 * @name Products
 * @path {DELETE} /products
 * 
 */
app.delete('/products', (req, res) => res.send('Welcome'))

/**
 * Index Route
 * 
 * @name Changes
 * @path {PUT} /changes
 * 
 */
app.put('/changes', (req, res) => res.send('Welcome'))