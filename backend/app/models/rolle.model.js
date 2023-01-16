const sql = require("./db.js");

// Models repräsentieren Elemente einer Tabelle in der DB:
// in diesem constructor werden der Instanz Rolle quasi die Attribute=Spalten der Tabelle rolle zugewiesen
// und somit der Zugriff ermöglicht
const Rolle = function(rolle) {
    this.id = rolle.id;
    this.rolle = rolle.rolle;
    this.beschreibung = rolle.beschreibung;

};

// im Folgenden werden für die Instanz Rolle Funktionen definiert, mit denen Abfragen an die DB erfolgen können:

Rolle.findById = (rolleId, result) => {
    sql.query(`SELECT * FROM rolle WHERE id = ${rolleId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found rolle: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Rolle with the id
        result({ kind: "not_found" }, null);
    });
};

// Rolle.findByRolle = (rolleRef, result) => {
//     sql.query(`SELECT * FROM rolle WHERE rolle = ${rolleRef}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("found rolle: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Rolle with the rolle
//         result({ kind: "not_found" }, null);
//     });
// };

Rolle.getAll = result => {
    sql.query("SELECT * FROM rolle", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("rolle: ", res);
        result(null, res);
    });
};

/* Rolle.updateById = (id, rolle, result) => {
    sql.query(
        "UPDATE rolle SET rolle = ?, beschreibung = ? WHERE id = ?",
        [rolle.rolle, rolle.beschreibung, id],
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

            console.log("updated rolle: ", { id: id, ...rolle });
            result(null, { id: id, ...rolle });
        }
    );
};

Rolle.remove = (id, result) => {
    sql.query("DELETE FROM rolle WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Rolle with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted rolle with id: ", id);
        result(null, res);
    });
};

Rolle.removeAll = result => {
    sql.query("DELETE FROM rolle", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} rolle`);
        result(null, res);
    });
};

Rolle.create = (newRolle, result) => {
    sql.query("INSERT INTO rolle SET ?", newRolle, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created rolle: ", { id: res.insertId, ...newRolle });
        result(null, { id: res.insertId, ...newRolle });
    });
};
 */
module.exports = Rolle;
