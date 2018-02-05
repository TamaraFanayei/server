

module.exports = (app) => {

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

    app.get('/api/tamara', (req, res) => {
        res.json({ navn: "Tamara", efternavn: "Fanayei", Bopæl: "Bryggen" });
    });

    app.post('/api/formular', (req, res) => {
        res.json({
            besked: "data blev modtaget",
            fornavn: req.body.fornavn,
            efternavn: req.body.efternavn
        });
    });

}
