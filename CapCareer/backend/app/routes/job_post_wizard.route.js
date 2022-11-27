module.exports = app => {
    const job_post_wizard = require("../controller/job_post_wizard.controller.js");

    // Create a new JobPostWizard
    app.post("/job_post_wizard", job_post_wizard.create);

    // GET all JobPostWizards
    app.get("/job_post_wizard", job_post_wizard.findAll);

    // GET one single JobPostWizard with job_post_wizardId
    app.get("/job_post_wizard/id:job_postId", job_post_wizard.findOneId);

        // // GET one single JobPostWizard with job_post_wizardId
        // app.get("/job_post_wizard/ref/:job_postRef", job_post_wizard.findOneRef);

    // Update one JobPostWizard with job_post_wizardId
    app.put("/job_post_wizard/:job_postId", job_post_wizard.update);

    // Delete the JobPostWizard with job_post_wizardId
    app.delete("/job_post_wizard/:job_postId", job_post_wizard.delete);

    // Delete all job_post_wizard
    app.delete("/job_post_wizard", job_post_wizard.deleteAll);
};