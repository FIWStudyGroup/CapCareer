const Skill = require("../models/skill.model.js");

// Create and Save a new Skill
/* JSON-Bsp.
{
    "id": "1",
    "skill": "Ich kann ..."   
} */

// Create a Skill
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Skill
    const skill = new Skill({
        id: req.body.id,
        skill: req.body.skill
    });
    
    // Save Skill in the database
    Skill.create(skill, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Skill."
            });
        else res.send(data);
    });
};

// Retrieve all Skill from the database.
exports.findAll = (req, res) => {
    Skill.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single Skill with a skillId
exports.findOneId = (req, res) => {
    Skill.findById(req.params.skillId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Skill with id ${req.params.skillId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Skill with id " + req.params.skillId
                });
            }
        } else res.send(data);
    });
};

// // Find a single Skill with a skillSkill
// exports.findOneSkill = (req, res) => {
//     Skill.findBySkill(req.params.skillSkill, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Skill with id ${req.params.skillSkill}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Skill with skill " + req.params.skillSkill
//                 });
//             }
//         } else res.send(data);
//     });
// };


// Update aSkill identified by the skillId in the request
exports.update = (req, res) => {

};

// Delete a Skill with the specified skillId in the request
exports.delete = (req, res) => {

};

// Delete all Skill from the database.
exports.deleteAll = (req, res) => {

};