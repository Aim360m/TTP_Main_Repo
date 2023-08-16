const express = require("express");
const app = express();
/*
app.get('/', (req, res) => {
    res.send(
      (`
      <html>
        <head>
          <title>This is a cool thing</title>
        </head>
        <body>
          <h1>Web design...So Funn</h1>
        </body>
      </html>
    `)
    );
  });
  const PORT = 3600;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});*/
app.get("/", (req, res) => {
    res.send(`
      <html>
          <head>
              <Title>Cars and Trucks</Title>
          </head>
          <body>
              <h1>The latest cars and trucks!</h1>
          </body>
      </html>`);
  });
  
  app.get("/cars", (req, res) => {
    res.send(`cars`);
  });
  
  app.get("/trucks", (req, res) => {
    res.send(`trucks`);
  });
  
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });