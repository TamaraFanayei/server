const express = require('express');
const app = express();

app.get('/api/tamara', (req, res) => {
    res.json({ navn: "Tamara", efternavn: "Fanayei", Bopæl: "Bryggen" });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on');
});



