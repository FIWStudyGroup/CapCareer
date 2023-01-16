// Erzeugen einer Instanz, die sich auf das Model bezieht
const Rolle = require("../models/rolle.model.js");

// Funktionen für die oben erzeugte Instanz, die ihrerseits die Funktionen des Models aufrufen

// Retrieve all Rolles from the database.
exports.findAll = (req, res) => {
    Rolle.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        else res.send(data);
    });
};

// Find a single Rolle with a rolleId
exports.findOneId = (req, res) => {
    Rolle.findById(req.params.rolleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Rolle with id ${req.params.rolleId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Rolle with id " + req.params.rolleId
                });
            }
        } else res.send(data);
    });
};

// // Find a single Rolle with a rolleRef
// exports.findOneRef = (req, res) => {
//     Rolle.findById(req.params.rolleRef, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Rolle with id ${req.params.rolleRef}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Rolle with rolle " + req.params.rolleRef
//                 });
//             }
//         } else res.send(data);
//     });
// };

// Create a Rolle
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Rolle
    const rolle = new Rolle({
        rolle: req.body.rolle,

        beschreibung: req.body.beschreibung,

    });
    
    // Save Rolle in the database
    Rolle.create(rolle, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Rolle."
            });
        else res.send(data);
    });
};

// Update a Rolle identified by the rolleId in the request
exports.update = (req, res) => {

};

// Delete a Rolle with the specified rolleId in the request
exports.delete = (req, res) => {

};

// Delete all Rolles from the database.
exports.deleteAll = (req, res) => {

};
