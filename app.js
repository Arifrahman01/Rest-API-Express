const express = require("express");
const Simande = require("./routes/simande/H1/routes");

const app = express();

app.use(Simande)


app.listen(3000, () => {
 console.log("Server running on port 3000");
});

