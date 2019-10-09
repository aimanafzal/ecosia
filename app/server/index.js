require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8083
const app = express();
const routes = require('../route/routes');

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});