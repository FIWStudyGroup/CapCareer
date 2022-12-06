const express = require("express");
const cors = require('cors');
const app = express();

const bodyParser = require("body-parser"); 
// enable cors for all requests
app.use(cors());


require("./app/routes/job_post_wizard.route.js")(app);
require("./app/routes/question.route.js")(app);
require("./app/routes/answer.route.js")(app);
require("./app/routes/skill.route.js")(app);

// parse requests of content-type: application/json
app.use(bodyParser.json());






// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello FIW!" });
});


// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});


//Variante mit express.Router, evtl. später interessant? muss dann aber in den Routes-Dateien alles angepasst werden
/* const job_post_wizardRoute = require("./app/routes/job_post_wizard.route.js");
const questionRoute = require("./app/routes/question.route.js");
const answerRoute = require("./app/routes/answer.route.js");
const skillRoute = require("./app/routes/skill.route.js"); 
app.use('/job_post_wizard', job_post_wizardRoute);
app.use('/question', questionRoute);
app.use('/answer', answerRoute); 
app.use('/skill', skillRoute);*/
