const JobPostWizard = require("../models/job_post_wizard.model.js");

// Create and Save a new JobPostWizard
exports.create = (req, res) => {

};

// Retrieve all JobPostWizards from the database.
exports.findAll = (req, res) => {
    JobPostWizard.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single JobPostWizard with a job_post_wizardId
exports.findOne = (req, res) => {

};

// Update a JobPostWizard identified by the job_post_wizardId in the request
exports.update = (req, res) => {

};

// Delete a JobPostWizard with the specified job_post_wizardId in the request
exports.delete = (req, res) => {

};

// Delete all JobPostWizards from the database.
exports.deleteAll = (req, res) => {

};