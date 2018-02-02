const express = require('express');
const app = express();

const logger = require('morgan'); //disse to linjer, er det der skal til, så så vi kan holde øje med om vi har skrevet korrekt eller om andet er gået galt undervejs.
app.use(logger('drev')); // hvornår er det foregåret en ruquest og hvilken type request var det. 

app.get('/api/tamara', (req, res) => {
    res.json({ navn: "Tamara", efternavn: "Fanayei", Bopæl: "Bryggen" });
});


app.get('/api/test', (req, res) => {
    res.json({ text: "Hello World" });
});

app.get('/api/fanayei', (req, res) => {
    res.json({ noget: "Hej" });
});

app.get('/api/espander', (req, res) => {
    res.json({ andet: "farvel" });
});

app.get('/api/form', (req, res) => {
    res.json({ andet: "farvel" });
});
//en måde at sende data med til vores server. Fx at gå ned i en databasa og hente en bruger, der har et bestemt id. 
app.get('/api/test/:id', (req, res) => {  //:id bliver til req.params.id.  Den ligger det ned i et object, som vi kan arbejde med.  en 
    console.log(req.params.id);
    res.json({ param: req.params.id });
});


app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});



