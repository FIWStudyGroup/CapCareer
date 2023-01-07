const CurrentQuestionnaire = require("../models/current_questionnaire.model.js");



// Create an entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a new one
    const CurrentQuestionnaire = new CurrentQuestionnaire({
        question_id: req.body.question_id,
        sequence: req.body.sequence
    });
    
    // Save a new one in the database
    CurrentQuestionnaire.create(current_questionnaire, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Skill."
            });
        else res.send(data);
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
    CurrentQuestionnaire.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Retrieve all from the database.
exports.findAllQuestionTexts = (req, res) => {
    CurrentQuestionnaire.getAllQuestions((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

exports.findAllAnswersText = (req, res) => {
    CurrentQuestionnaire.getAllAnswers((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single one with a current_questionnaireSequence
exports.findOneId = (req, res) => {
    CurrentQuestionnaire.findBySequence(req.params.sequence, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found with sequence ${req.params.sequence}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving with sequence " + req.params.sequence
                });
            }
        } else res.send(data);
    });
};



// Update identified by the sequence in the request
exports.update = (req, res) => {

};

// Delete a with the specified sequence in the request
exports.delete = (req, res) => {

};

// Delete all from the database.
exports.deleteAll = (req, res) => {

};