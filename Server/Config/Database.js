const mongoose = require('mongoose');

const url = 'mongodb+srv://fivosoft:Fivosoft..112233@fivosoft-cluster.wwvt2bb.mongodb.net/Fivosoft?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected Successfully'))
    .catch((err) => { console.error(err) });