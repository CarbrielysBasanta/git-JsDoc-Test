const express = require('express')
const app = express();
const path = require('path');

/**
 * @module api
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

app.listen(app.get('port'), () => {
    console.log('Server listen on port', app.get('port'))
})