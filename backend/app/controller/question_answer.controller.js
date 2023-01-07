const QuestionAnswer = require("../models/question_answer.model.js");

// Create and Save a new questionanswer
/* JSON-Bsp.
{
    "question_id": "1",
    "answer_id": "1",

} */

// Create an entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a new one
    const QuestionAnswer = new QuestionAnswer({
        question_id: req.body.question_id,
        answer_id: req.body.answer_id
    });
    
    // Save a new one in the database
    QuestionAnswer.create(question_answer, (err, data) => {
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
    QuestionAnswer.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single one with a question_answerId
exports.findOneId = (req, res) => {
    QuestionAnswer.findById(req.params.questionanswerID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found with id ${req.params.questionanswerID}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving with id " + req.params.questionanswerID
                });
            }
        } else res.send(data);
    });
};



// Update identified by the questionanswerID in the request
exports.update = (req, res) => {

};

// Delete a with the specified questionanswerID in the request
exports.delete = (req, res) => {

};

// Delete all from the database.
exports.deleteAll = (req, res) => {

};