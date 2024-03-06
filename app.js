const Express = require('express');
const app = new Express();
const PORT = 3004

app.get('/', (req, res) => {
    res.send('Heyyy')
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));