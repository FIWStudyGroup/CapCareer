// Hier werden die Routen und Arten der HTTP-Requests definiert
// Route meint hier den Teil, der an http://localhost:3000 angehängt wird
// welche Art HTTP-Request benutzt wird, wird nach app.xyz definiert: 
// get: lesen, post: erzeugen, put: ändern und delete: löschen
module.exports = app => {
    const job_post_wizard = require("../controller/job_post_wizard.controller.js");

    // Create a new JobPostWizard
    app.post("/job_post_wizard", job_post_wizard.create);

    // GET all JobPostWizards
    app.get("/job_post_wizard", job_post_wizard.findAll);

    // GET one single JobPostWizard with job_post_wizardId
    
    app.get("/job_post_wizard/:job_postId", job_post_wizard.findOneId);

        // // GET one single JobPostWizard with job_post_wizardRef
        // app.get("/job_post_wizard/ref/:job_postRef", job_post_wizard.findOneRef);

    // Update one JobPostWizard with job_post_wizardId
    app.put("/job_post_wizard/:job_postId", job_post_wizard.update);

    // Delete the JobPostWizard with job_post_wizardId
    app.delete("/job_post_wizard/:job_postId", job_post_wizard.delete);

    // Delete all job_post_wizard
    app.delete("/job_post_wizard", job_post_wizard.deleteAll);
};


// Variante aus Alexandras WebTech-Arbeit mit express.Router, evtl. später sinnvoll?
/* const express = require('express');
const router = express.Router();
module.exports = router;
//
    const job_post_wizard = require("../controller/job_post_wizard.controller.js");

    // Create a new JobPostWizard
    router.post("/job_post_wizard", job_post_wizard.create);

    // GET all JobPostWizards
    router.get("/job_post_wizard", job_post_wizard.findAll);

    // GET one single JobPostWizard with job_post_wizardId
    router.get("/job_post_wizard/id:job_postId", job_post_wizard.findOneId);

        // // GET one single JobPostWizard with job_post_wizardId
        // router.get("/job_post_wizard/ref/:job_postRef", job_post_wizard.findOneRef);

    // Update one JobPostWizard with job_post_wizardId
    router.put("/job_post_wizard/:job_postId", job_post_wizard.update);

    // Delete the JobPostWizard with job_post_wizardId
    router.delete("/job_post_wizard/:job_postId", job_post_wizard.delete);

    // Delete all job_post_wizard
    router.delete("/job_post_wizard", job_post_wizard.deleteAll);
//}; */