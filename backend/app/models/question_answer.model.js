const sql = require("./db.js");

// constructor
const QuestionAnswer = function(question_answer) {
    this.idquestion = question_answer.question_id;
    this.idanswer = question_answer.answer_id;
};

QuestionAnswer.create = (newQuestionAnswer, result) => {
    sql.query("INSERT INTO question_answer SET ?", newQuestionAnswer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created questionanswer: ", { id: res.insertId, ...newQuestionAnswer });
        result(null, { id: res.insertId, ...newQuestionAnswer });
    });
};

QuestionAnswer.findById = (QuestionAnswerID, result) => {
    sql.query(`SELECT * FROM question_answer WHERE id = ${QuestionAnswerID}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found question_answer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found QuestionAnswer with the id
        result({ kind: "not_found" }, null);
    });


};
// kopiert, aber weiß nicht, ob ich es ändern muss
// Skill.findBySkill = (skillSkill, result) => {
//     sql.query(`SELECT * FROM skill WHERE ref = ${skillSkill}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("skill: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Skill with the ref
//         result({ kind: "not_found" }, null);
//     });
// };


QuestionAnswer.getAll = result => {
    sql.query("SELECT * FROM question_answer", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("question_answer: ", res);
        result(null, res);
    });
};
/*
Bin mir hier auch nicht sicher, muss es geupdatet werden?
QuestionAnswer.updateById = (question_id, answer_id, result) => {
    sql.query(
        "UPDATE question_answer SET question_id = ? WHERE id = ?",
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


Skill.remove = (id, result) => {
    sql.query("DELETE FROM question_answer WHERE id = ?", question_id, (err, res) => {
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
    sql.query("DELETE FROM question_answer", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} question_answer`);
        result(null, res);
    });
};
*/

module.exports = QuestionAnswer;

