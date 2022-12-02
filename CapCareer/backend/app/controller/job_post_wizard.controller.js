const JobPostWizard = require("../models/job_post_wizard.model.js");

// Create and Save a new JobPostWizard
/* JSON-Bsp.
{
    "ref": "test123",
    "title": "extrem cooler it-job",
    "description": "elon musk und zuckerberg können einpacken",
    "url": "www.supercool.org"    
} */

// Create a JobPost
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a JobPost
    const job_post = new JobPostWizard({
        ref: req.body.ref,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    });
    
    // Save JobPost in the database
    JobPostWizard.create(job_post, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the JobPost."
            });
        else res.send(data);
    });
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

// Find a single JobPostWizard with a job_postId
exports.findOneId = (req, res) => {
    JobPostWizard.findById(req.params.job_postId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found JobPost with id ${req.params.job_postId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving JobPost with id " + req.params.job_postId
                });
            }
        } else res.send(data);
    });
};

// // Find a single JobPostWizard with a job_postRef
// exports.findOneRef = (req, res) => {
//     JobPostWizard.findById(req.params.job_postRef, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found JobPost with id ${req.params.job_postRef}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving JobPost with ref " + req.params.job_postRef
//                 });
//             }
//         } else res.send(data);
//     });
// };


// Update a JobPostWizard identified by the job_postId in the request
exports.update = (req, res) => {

};

// Delete a JobPostWizard with the specified job_postId in the request
exports.delete = (req, res) => {

};

// Delete all JobPostWizards from the database.
exports.deleteAll = (req, res) => {

};