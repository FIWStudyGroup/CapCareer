module.exports = app => {
    const answer = require("../controller/answer.controller.js");

    // Create a new Answer
    app.post("/answer", answer.create);

    // GET all Answer
    app.get("/answer", answer.findAll);

    // GET one single Answer with answerId
    app.get("/answer/id:answerId", answer.findOneId);

        // // GET one single Answer with answerId
        // app.get("/answer/answer/:answerAnswer", answer.findOneAnswer);

    // Update one Answer with answerId
    app.put("/answer/:answerId", answer.update);

    // Delete the Answer with answerId
    app.delete("/answer/:answerId", answer.delete);

    // Delete all Answer
    app.delete("/answer", answer.deleteAll);
};