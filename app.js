const Express = require("express");
const { Server } = require('http')
const app = new Express();
const server = new Server(app)
const PORT = 3004;
const UserRoutes = require('./routes/userRoutes')


app.use(Express.json())
app.use('/users', UserRoutes)


server.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = { app, server};
