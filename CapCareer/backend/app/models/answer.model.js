const sql = require("./db.js");

// constructor
const Answer = function(answer) {
    this.id = answer.id;
    this.answer = answer.answer;
};


Answer.create = (newAnswer, result) => {
    sql.query("INSERT INTO answer SET ?", newAnswer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created answer: ", { id: res.insertId, ...newAnswer });
        result(null, { id: res.insertId, ...newAnswer });
    });
};

Answer.findById = (answerId, result) => {
    sql.query(`SELECT * FROM answer WHERE id = ${answerId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found answer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Answer with the id
        result({ kind: "not_found" }, null);
    });
};

// Answer.findByAnswer = (answerAnswer, result) => {
//     sql.query(`SELECT * FROM answer WHERE ref = ${answerAnswer}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("answer: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Answer with the ref
//         result({ kind: "not_found" }, null);
//     });
// };

Answer.getAll = result => {
    sql.query("SELECT * FROM answer", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("answer: ", res);
        result(null, res);
    });
};

Answer.updateById = (id, answer, result) => {
    sql.query(
        "UPDATE answer SET answer = ? WHERE id = ?",
        [answer.answer, id],
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

            console.log("updated answer: ", { id: id, ...answer });
            result(null, { id: id, ...answer });
        }
    );
};

Answer.remove = (id, result) => {
    sql.query("DELETE FROM answer WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Answer with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted answer with id: ", id);
        result(null, res);
    });
};

Answer.removeAll = result => {
    sql.query("DELETE FROM answer", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} answer`);
        result(null, res);
    });
};

module.exports = Answer;