const sql = require("./db.js");

// constructor
const Skill = function(skill) {
    this.id = skill.id;
    this.skill = skill.skill;
};


Skill.create = (newSkill, result) => {
    sql.query("INSERT INTO skill SET ?", newSkill, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created skill: ", { id: res.insertId, ...newSkill });
        result(null, { id: res.insertId, ...newSkill });
    });
};

Skill.findById = (skillId, result) => {
    sql.query(`SELECT * FROM skill WHERE id = ${skillId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found skill: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Skill with the id
        result({ kind: "not_found" }, null);
    });
};

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

Skill.getAll = result => {
    sql.query("SELECT * FROM skill", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("skill: ", res);
        result(null, res);
    });
};

Skill.updateById = (id, skill, result) => {
    sql.query(
        "UPDATE skill SET skill = ? WHERE id = ?",
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
    sql.query("DELETE FROM skill WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Skill with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted skill with id: ", id);
        result(null, res);
    });
};

Skill.removeAll = result => {
    sql.query("DELETE FROM skill", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} skill`);
        result(null, res);
    });
};

module.exports = Skill;