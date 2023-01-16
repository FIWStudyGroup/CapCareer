// Erzeugen einer Instanz, die sich auf das Model bezieht
const JobAngebot = require("../models/job_angebot.model.js");

// Funktionen für die oben erzeugte Instanz, die ihrerseits die Funktionen des Models aufrufen

// Retrieve all JobAngebote from the database.
exports.findAll = (req, res) => {
    JobAngebot.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single JobAngebot with a job_angebotRef
exports.findOneId = (req, res) => {
    JobAngebot.findByRef(req.params.job_angebotRef, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found JobAngebot with ref ${req.params.job_angebotRef}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving JobAngebot with ref " + req.params.job_angebotRef
                });
            }
        } else res.send(data);
    });
};
