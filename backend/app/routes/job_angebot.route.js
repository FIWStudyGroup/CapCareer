// Hier werden die Routen und Arten der HTTP-Requests definiert
// Route meint hier den Teil, der an http://localhost:3000 angehängt wird
// welche Art HTTP-Request benutzt wird, wird nach app.xyz definiert: 
// get: lesen, post: erzeugen, put: ändern und delete: löschen
module.exports = app => {
    const job_angebot = require("../controller/job_angebot.controller.js");



    // GET all JobAngebots
    app.get("/job_angebot", job_angebot.findAll);

    // GET one single JobAngebot with job_angebotId
    
    app.get("/job_angebot/:job_angebotId", job_angebot.findOneId);

        // // GET one single JobAngebot with job_angebotRef
        // app.get("/job_angebot/ref/:job_angebotRef", job_angebot.findOneRef);

    // Create a new JobAngebot
   // app.post("/job_angebot", job_angebot.create);
    // Update one JobAngebot with job_angebotId
    //app.put("/job_angebot/:job_angebotId", job_angebot.update);

    // Delete the JobAngebot with job_angebotId
    // app.delete("/job_angebot/:job_angebotId", job_angebot.delete);

    // // Delete all job_angebot
    // app.delete("/job_angebot", job_angebot.deleteAll);
};
