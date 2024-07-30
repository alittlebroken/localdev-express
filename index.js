const app = require('./src/app');

/**
 * Configuration
 */
const PORT = process.env.port || 3000;


/**
 * Start the server listening on the desired port
 */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});