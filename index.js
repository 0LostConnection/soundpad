const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const INDEX = 'src/index.html';

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(INDEX, { root: __dirname }));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));