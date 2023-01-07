const Question = require("../models/question.model.js");

// Create and Save a new Question
/* JSON-Bsp.
{
    "id": "1",
    "question": "Wie gehst du ..."   
} */

// Create a Question
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Question
    const question = new Question({
        id: req.body.id,
        question: req.body.question
    });
    
    // Save Question in the database
    Question.create(question, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Question."
            });
        else res.send(data);
    });
};

// Retrieve all Question from the database.
exports.findAll = (req, res) => {
    Question.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single Question with a questionId
exports.findOneId = (req, res) => {
    Question.findById(req.params.questionId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found question with id ${req.params.questionId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Question with id " + req.params.questionId
                });
            }
        } else res.send(data);
    });
};

// // Find a single Question with a questionQuestion
// exports.findOneQuestion = (req, res) => {
//     Question.findByQuestion(req.params.questionQuestion, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Question with id ${req.params.questionQuestion}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Question with question " + req.params.questionQuestion
//                 });
//             }
//         } else res.send(data);
//     });
// };


// Update a Question identified by the questionId in the request
exports.update = (req, res) => {

};

// Delete a Question with the specified questionId in the request
exports.delete = (req, res) => {

};

// Delete all Question from the database.
exports.deleteAll = (req, res) => {

};