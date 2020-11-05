const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const connectURL = 'mongodb+srv://tiktokapp:maimaiiuem@cluster0.6cdmp.mongodb.net/tiktokdb?retryWrites=true&w=majority';
const Tiktok = require('./dbTiktok');

mongoose.connect(connectURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, (err, client) => {
    if (err) return console.log('Ket noi that bai');
    console.log('Ket noi thah cong');
})

app.use(express.json());
app.use(Cors());

app.get('/', (req, res) => {
    res.send('Nam dep zai');
})

app.post('/tiktoks', (req, res) => {
    const tiktoks = new Tiktok(req.body);
    tiktoks.save((err, data) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(data);
    })
})

app.get('/tiktoks', (req, res) => {
    Tiktok.find().then((tiktoks) => {
        res.status(200).send(tiktoks);
    }).catch(err => {
        res.status(500).send(err);
    })
})


app.listen(port, () => {
    console.log('Server dang chay ', port)
})