const sql = require("./db.js");

// constructor
const CurrentQuestionnaire = function(current_questionnaire_answer) {
    this.question_id = current_questionnaire.question_id;
    this.sequence = current_questionnaire.sequence;
    // um Fragetext zu holen
    this.question = current_questionnaire.question;
    // Tabelle mit Antwort-IDs
    this.answer_id = current_questionnaire_answers.answer_id;
    
};

CurrentQuestionnaire.getAll = result => {
    sql.query("SELECT * FROM current_questionnaire ORDER BY sequence", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("current_questionnaire: ", res);
        result(null, res);
    });
};
CurrentQuestionnaire.getAllQuestions = result => {
    sql.query("SELECT sequence, question FROM current_questionnaire JOIN question ON question_id = id ORDER BY sequence", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("current_questionnaire: ", res);
        result(null, res);
    });
};

// holt alle Answers aus View-Tabelle current_questionnaire_answers_text
CurrentQuestionnaire.getAllAnswers = result => {
    sql.query("SELECT sequence, answer_id, answer FROM current_questionnaire_answers_text ORDER BY sequence", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("current_questionnaire: ", res);
        result(null, res);
    });
};








CurrentQuestionnaire.create = (newCurrentQuestionnaire, result) => {
    sql.query("INSERT INTO current_questionnaire SET ?", newCurrentQuestionnaire, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created questionanswer: ", { id: res.insertId, ...newCurrentQuestionnaire });
        result(null, { id: res.insertId, ...newCurrentQuestionnaire });
    });
};

CurrentQuestionnaire.findBySequence = (CurrentQuestionnaireID, result) => {
    sql.query(`SELECT * FROM current_questionnaire WHERE sequence = ${CurrentQuestionnaireSequence}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found current_questionnaire: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found CurrentQuestionnaire with sequence
        result({ kind: "not_found" }, null);
    });


};



/*
übernommen aus question_answer, nicht überarbeitet weil nicht notwendig z.Zt.
Bin mir hier auch nicht sicher, muss es geupdatet werden?
CurrentQuestionnaire.updateById = (question_id, answer_id, result) => {
    sql.query(
        "UPDATE current_questionnaire SET question_id = ? WHERE id = ?",
        [skill.skill, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found item with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated skill: ", { id: id, ...skill });
            result(null, { id: id, ...skill });
        }
    );
};

// nicht notwendig z.Zt.
Skill.remove = (id, result) => {
    sql.query("DELETE FROM current_questionnaire WHERE id = ?", question_id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted with id: ", id);
        result(null, res);
    });
};

Skill.removeAll = result => {
    sql.query("DELETE FROM current_questionnaire", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} current_questionnaire`);
        result(null, res);
    });
};
*/

module.exports = CurrentQuestionnaire;