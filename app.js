const express = require('express');
const path = require('path');
const app = express();
const gameRoutes = require('./routes/game')

app.listen(3000, () => {
    console.log("Serwer nasłuchuje")
});

app.use(express.static(
    path.join(__dirname, 'public')
));

gameRoutes(app);
