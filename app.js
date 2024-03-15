const Express = require("express");
const app = new Express();
const PORT = 3004;

async function main() {
  //const db = db.connect()

  // define auth middleware

  // define routes
    /* 
    app.use('/users', users)
    app.use('/currencies', currencies)
    app.use('/wallets', wallets)
    app.use('/offers', offers) 
    */

  app.get("/", (req, res) => {
    res.send("Heyyy!!");
  });

  await app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  return app;
}

module.exports = main();
