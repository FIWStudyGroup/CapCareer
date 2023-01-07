module.exports = app => {
    const current_questionnaire = require("../controller/current_questionnaire.controller.js");

    // Create a new 
    app.post("/current_questionnaire", current_questionnaire.create);

    // GET all 
    app.get("/current_questionnaire", current_questionnaire.findAll);

    // GET all question text in sequence order
    app.get("/current_questionnaireQuestionsText", current_questionnaire.findAllQuestionTexts);

    // GET one single with
    app.get("/current_questionnaire/:sequence", current_questionnaire.findOneId);

    app.get("/current_questionnaireAnswersText", current_questionnaire.findAllAnswersText);
       
    // Update one  with 
    app.put("/current_questionnaire/:sequence", current_questionnaire.update);

    // Delete the with 
    app.delete("/current_questionnaire/:sequence", current_questionnaire.delete);

    // Delete all 
    app.delete("/current_questionnaire", current_questionnaire.deleteAll);
};