module.exports = app => {
    const question_answer = require("../controller/question_answer.controller.js");

    // Create a new 
    app.post("/question_answer", question_answer.create);

    // GET all 
    app.get("/question_answer", question_answer.findAll);

    // GET one single with
    app.get("/question_answer/:questionanswerId", question_answer.findOneId);

       
    // Update one  with 
    app.put("/question_answer/:questionanswerID", question_answer.update);

    // Delete the with 
    app.delete("/question_answer/:questionanswerId", question_answer.delete);

    // Delete all 
    app.delete("/question_answer", question_answer.deleteAll);
};