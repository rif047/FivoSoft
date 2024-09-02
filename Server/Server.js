const express = require('express');
const app = express();
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const Routes = require('./Routes');
require('./Config/Database');



app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static('Assets'));


app.use('/api/', Routes);



app.get('/', (req, res) => {
    res.send('API LINK IS <a href="http://fivosoft.mepfbd.com/api">http://fivosoft.mepfbd.com/api</a>')
})




app.listen(9000, () => {
    console.log('Server Running at http://fivosoft.mepfbd.com');
})
