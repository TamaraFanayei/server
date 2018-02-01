# server

Server

How to install: 

init

NodeJS kan arbejde med et koncept kaldet modules, hvor hvert modul er et bibliotek af funktioner, skrevet i javascript. og man kan sætte et NodeJS projekt op, så det kan arbejde med funktionerne i et modul.

For at sætte projektet op, skal det først initialiseres, det klares ved at skrive følgende i konsollen: npm init og tryk på enter. (sørg for at stå det korrekte sted i konsol stien! skal være projekt roden.)
Så guides man igennem en simpel opsætning, der ender ud med at generere filen package.json som indeholder projektes opsætning.

install
Det næste er at installere et modul, så NodeJS kan fungere som server. Der findes mange foreskellige moduler der kan give serverfunktionerne, vi har valgt at fokusere på et module kaldet express som kan alt det vi har behov for på uddannelsen.

For at installere modulet, tastes følgende kommando i kommandoprompten: npm install express --save
Nu henter node package manageren (npm) alle de filer som er nødvendige for at express kan køre, og alt placeres i en mappe kaldet node_modules (som ikke skal lægges på github!, det er her .gitignore er vigtig)

det er vigtigt at huske --save da det vil tilføje modulet til package.json som et dependency dvs projektet er afhængig af modulet (og dets tilhørende moduler).

Så hvis man kloner repo'et og skriver npm install, så hentes alle de modules projektet har listet i package.json og projektet vil derved fungere og være opdateret.



const - god til at sætte systemer op, da den kan melde fejl. 
var - kan sagtens være inde i {}
let - stopper når den ikke er i {}

alle tre bruges til at oprette variabler. 


//app.get er en forespørgelse. Står der api/test i adressebaren er det den vi rammer. function req (request variabel og) res (respons variabel)
app.get('/api/test', (req, res) => {   //Her laves en rout (Nogle regler (routs) serveren bliver sat op efter)
    res.json({ text: "Hello World" }); //res har en json - vi sender et json-svar tilbage. (json er en function). Dens egenskaber er her "hello world"
});

app.listen(3000, (err) => {  //her fortæller vi, hvilken port den skal kigge på. Her er port 3000 ledig. //Her starter den. 
    if (err) {               // hvis der er en fejl, så udskriv den. 
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000'); //jeg vil gerne have at vide, at serveren er i gang. Den skal skrive i consollen, om den virker. 
});



const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
    res.json({ text: "Hello World" });
});


app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});
_____

const express = require('express');
const app = express();

const logger = require('morgan'); //disse to linjer, er det der skal til, så så vi kan holde øje med om vi har skrevet korrekt eller om andet er gået galt undervejs.
app.use(logger('drev')); // hvornår er det foregåret en ruquest og hvilken type request var det. 

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
______


Log request på vores server:

Morgan modul. 

Det kunne være rigtig smart at få besked om alle de requests der sker på vores server, så vi kan holde øje med om vi har skrevet korrekt eller om andet er gået galt undervejs.

Til det kan vi benytte et modul kaldet morgan, som kan auto-console-logge de forespørgelser der sker til serveren.

start med at installere morgan ved at skrive npm install morgan --save i konsollen og vent til den er hentet ned.

Derefter tilføjes følgende kode til app.js lige efter linje 2

const logger = require('morgan');
app.use(logger('dev'));
Det er primært "development" log info vi er interesseret i, så derfor står der dev i logger() funktionen

Hvis alt er sat op som det skal, og du har genstartet serveren, så gå ud i browseren og opdater siden. Nu burde der være en ekstra linje i VScode konsollen, der ligner dette: GET / 200 8.833 ms - 554

Her kan vi se der har været en request af typen GET og svaret var 200, det tog 8,833 millisekunder og der blev leveret 554 bytes.


__________
server auto stop/start...
Node mon -- 

I har måske allerede opdaget det kan være svært at huske at genstarte serveren hver gang I ændrer på filerne...

Der findes værktøjer som kan holde øje med hvornår en fil ændres, og automatisk genstarte scriptet.

Modulet kaldes nodemon - node mon ikke no demon ;)

Det skal installeres på en lidt speciel måde, da vi netop kun er afhængige af funktionaliteten imens vi udvikler. Skriv npm install nodemon --save-dev så vil modulet knyttes til projektet som et develepment-dependency

Når det er hentet og installert, skal vi tilpasse package.json så vi kan benytte nodemon til at genstarte serveren.

I package.json findes elementet scripts, og det tilpasses så der står følgende:

   "scripts": {
      "start": "nodemon app.js",
      "test": "echo \"Error: no test specified\" && exit 1"
   },
det er "start" der tilføjes, hvor vi beder den om at udføre kommandoen nodemon app.js hvis vi skriver npm start i konsollen.

Så gem alle filer, og sørg for serveren er stoppet.

Nu vil vi starte serveren igen, og benytte nodemon, så nu tastes npm start istedet for node app og der burde meget gerne komme følgende tekst i konsollen:

[nodemon] 1.14.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
prøv at ret i filen app.js imens serveren kører, og gem dokumentet, så skulle nodemon sørge for at genstarte serveren automatisk

[nodemon] restarting due to changes...
[nodemon] starting `node app.js`




app.get('/api/fanayei', (req, res) => {
    res.json({ noget: "hej" });
});


app.get('/api/espander', (req, res) => {
    res.json({ andet: "farvel" });
});


   fetch('http://localhost:3000/api/fanayei')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(json => {
                console.log(json);
            })

        fetch('http://localhost:3000/api/espander')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(json => {
                console.log(json);
            })