const express = require('express')
const app = express();
const path = require('path');

/**
 * @module api
 */

/**
 * Api's port
 * @name Port
 * @path {SET}
 */
app.set('port', process.env.PORT || 3000);

/**
 * Index Route
 * 
 * @name Index
 * @path {GET} / 
 * 
 */
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, 'helloworld.html'));})

/**
 * User's Route
 * @name Users
 * @path {POST} /users
 * 
 */
app.post('/users', (req, res) => res.send('Welcome'))

/**
 * Product's Route
 * 
 * @name Products
 * @path {DELETE} /products
 * 
 */
app.delete('/products', (req, res) => res.send('Welcome'))

/**
 * Changes' Route
 * 
 * @name Changes
 * @path {PUT} /changes
 * 
 */
app.put('/changes', (req, res) => res.send('Welcome'))

/**
 * Port is listening on port 3000
 * @name Listen
 * @path {LISTEN}
 * 
 */

app.listen(app.get('port'), () => {
    console.log('Server listen on port', app.get('port'))
})