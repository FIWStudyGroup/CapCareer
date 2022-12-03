const sql = require("./db.js");

// constructor
const Question = function(question) {
    this.id = question.id;
    this.question = question.question;
};


Question.create = (newQuestion, result) => {
    sql.query("INSERT INTO answer SET ?", newQuestion, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created question: ", { id: res.insertId, ...newQuestion });
        result(null, { id: res.insertId, ...newQuestion });
    });
};

Question.findById = (questionId, result) => {
    sql.query(`SELECT * FROM question WHERE id = ${questionId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found question: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Question with the id
        result({ kind: "not_found" }, null);
    });
};

// Question.findByQuestion = (questionQuestion, result) => {
//     sql.query(`SELECT * FROM question WHERE ref = ${questionQuestion}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("question: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Question with the ref
//         result({ kind: "not_found" }, null);
//     });
// };

Question.getAll = result => {
    sql.query("SELECT * FROM question", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("question: ", res);
        result(null, res);
    });
};

Question.updateById = (id, question, result) => {
    sql.query(
        "UPDATE question SET question = ? WHERE id = ?",
        [question.question, id],
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

            console.log("updated question: ", { id: id, ...question });
            result(null, { id: id, ...question });
        }
    );
};

Question.remove = (id, result) => {
    sql.query("DELETE FROM question WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Question with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted question with id: ", id);
        result(null, res);
    });
};

Question.removeAll = result => {
    sql.query("DELETE FROM question", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} question`);
        result(null, res);
    });
};

module.exports = Question;