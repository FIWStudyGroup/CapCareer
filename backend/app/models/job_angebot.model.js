const sql = require("./db.js");

// Models repräsentieren Elemente einer Tabelle in der DB:
// in diesem constructor werden der Instanz JobAngebot quasi die Attribute=Spalten der Tabelle job_angebot zugewiesen
// und somit der Zugriff ermöglicht
const JobAngebot = function(job_angebot) {
    this.ref = job_angebot.ref;
    this.rolle_id = job_angebot.rolle_id;
    this.standort = job_angebot.standort;
	this.url = job_angebot.url;
};

// im Folgenden werden für die Instanz JobAngebot Funktionen definiert, mit denen Abfragen an die DB erfolgen können

JobAngebot.getAll = result => {
    sql.query("SELECT * FROM job_angebot", (err, res) => {
        if (err) {
            console.log("hallohallo", err);
            result(null, err);
            return;
        }

        console.log("job_angebot: ", res);
        result(null, res);
    });
};



JobAngebot.findByRef = (job_angebotRef, result) => {
    sql.query(`SELECT * FROM job_angebot WHERE ref = ${job_angebotRef}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found job_angebot: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found JobAngebot with the ref
        result({ kind: "not_found" }, null);
    });
};





JobAngebot.remove = (ref, result) => {
    sql.query("DELETE FROM job_angebot WHERE ref = ?", ref, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found JobAngebot with the ref
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted job_angebot with ref: ", ref);
        result(null, res);
    });
};

JobAngebot.removeAll = result => {
    sql.query("DELETE FROM job_angebot", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} job_angebot`);
        result(null, res);
    });
};

module.exports = JobAngebot;
