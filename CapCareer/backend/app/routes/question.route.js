module.exports = app => {
    const question = require("../controller/question.controller.js");

    // Create a new Question
    app.post("/question", question.create);

    // GET all Question
    app.get("/question", question.findAll);

    // GET one single Question with questionId
    app.get("/question/:questionId", question.findOneId);

        // // GET one single Question with questionId
        // app.get("/question/question/:questionQuestion", question.findOneQuestion);

    // Update one Question with questionId
    app.put("/question/:questionId", question.update);

    // Delete the Question with questionId
    app.delete("/question/:questionId", question.delete);

    // Delete all Question
    app.delete("/question", question.deleteAll);
};