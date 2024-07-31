const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * Create & configure the express app
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());

/**
 * Import routing
 */

/**
 * Test route, remove when ready
 */
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        state: 'ok',
        message: 'Hello, World!',
        data: [{ hello: 'world'}]
    });
});

module.exports = app
