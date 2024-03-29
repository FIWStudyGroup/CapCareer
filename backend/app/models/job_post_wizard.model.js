const sql = require("./db.js");

// Models repräsentieren Elemente einer Tabelle in der DB:
// in diesem constructor werden der Instanz JobPost quasi die Attribute=Spalten der Tabelle job_post_wizard zugewiesen
// und somit der Zugriff ermöglicht
const JobPost = function(job_post) {
    this.id = job_post.id;
    this.ref = job_post.ref;
    this.title = job_post.title;
    this.description = job_post.description;
	this.url = job_post.url;
};

// im Folgenden werden für die Instanz JobPost Funktionen definiert, mit denen Abfragen an die DB erfolgen können

JobPost.create = (newJobPost, result) => {
    sql.query("INSERT INTO job_post_wizard SET ?", newJobPost, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created job_post: ", { id: res.insertId, ...newJobPost });
        result(null, { id: res.insertId, ...newJobPost });
    });
};

JobPost.findById = (job_postId, result) => {
    sql.query(`SELECT * FROM job_post_wizard WHERE id = ${job_postId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found job_post: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found JobPost with the id
        result({ kind: "not_found" }, null);
    });
};

// JobPost.findByRef = (job_postRef, result) => {
//     sql.query(`SELECT * FROM job_post_wizard WHERE ref = ${job_postRef}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("found job_post: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found JobPost with the ref
//         result({ kind: "not_found" }, null);
//     });
// };

JobPost.getAll = result => {
    sql.query("SELECT * FROM job_post_wizard", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("job_post_wizard: ", res);
        result(null, res);
    });
};

JobPost.updateById = (id, job_post, result) => {
    sql.query(
        "UPDATE job_post_wizard SET ref = ?, title = ?, description = ? WHERE id = ?",
        [job_post.ref, job_post.title, job_post.description, id],
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

            console.log("updated job_post: ", { id: id, ...job_post });
            result(null, { id: id, ...job_post });
        }
    );
};

JobPost.remove = (id, result) => {
    sql.query("DELETE FROM job_post_wizard WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found JobPost with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted job_post with id: ", id);
        result(null, res);
    });
};

JobPost.removeAll = result => {
    sql.query("DELETE FROM job_post_wizard", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} job_post_wizard`);
        result(null, res);
    });
};

module.exports = JobPost;