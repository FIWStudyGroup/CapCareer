const Answer = require("../models/answer.model.js");

// Create and Save a new Answer
/* JSON-Bsp.
{
    "id": "1",
    "answer": "Ich gehe ..."   
} */

// Create a Answer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Answer
    const answer = new Answer({
        id: req.body.id,
        answer: req.body.answer
    });
    
    // Save Answer in the database
    Answer.create(answer, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Answer."
            });
        else res.send(data);
    });
};

// Retrieve all Answers from the database.
exports.findAll = (req, res) => {
    Answer.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single Answer with a answerId
exports.findOneId = (req, res) => {
    Answer.findById(req.params.answerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Answer with id ${req.params.answerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Answer with id " + req.params.answerId
                });
            }
        } else res.send(data);
    });
};

// // Find a single Answer with a answerAnswer
// exports.findOneAnswer = (req, res) => {
//     Answer.findByAnswer(req.params.answerAnswer, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Answer with id ${req.params.answerAnswer}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Answer with answer " + req.params.answerAnswer
//                 });
//             }
//         } else res.send(data);
//     });
// };


// Update a Answer identified by the answerId in the request
exports.update = (req, res) => {

};

// Delete a Answer with the specified answerId in the request
exports.delete = (req, res) => {

};

// Delete all Answers from the database.
exports.deleteAll = (req, res) => {

};