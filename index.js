const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.status(200);
    response.send("online");
    response.end();
});

app.listen(process.env.PORT);