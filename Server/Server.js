const express = require('express');
const app = express();
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const Routes = require('./Routes');
const PORT = process.env.PORT || 9000;
require('./Config/Database');
require('dotenv').config();




app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static('Assets'));



app.use('/api/', Routes);



app.get('/', (req, res) => {
    res.send(`Server Successfully Running. Browse API URL`)
})




app.listen(PORT, () => {
    console.log(`Server Successfully Running at http://localhost:${PORT}`);
})
