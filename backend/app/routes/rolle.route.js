// Hier werden die Routen und Arten der HTTP-Requests definiert
// Route meint hier den Teil, der an http://localhost:3000 angehängt wird
// welche Art HTTP-Request benutzt wird, wird nach app.xyz definiert: 
// get: lesen, post: erzeugen, put: ändern und delete: löschen
module.exports = app => {
    const rolle = require("../controller/rolle.controller.js");



    // GET all Rolles
    app.get("/rolle", rolle.findAll);

    // GET one single Rolle with rolleId
    
    app.get("/rolle/:rolleId", rolle.findOneId);

        // // GET one single Rolle with rolleRef
        // app.get("/rolle/rolle/:rolleRef", rolle.findOneRef);

    // Update one Rolle with rolleId
    app.put("/rolle/:rolleId", rolle.update);

    // Delete the Rolle with rolleId
    app.delete("/rolle/:rolleId", rolle.delete);

    // Delete all rolle
    app.delete("/rolle", rolle.deleteAll);  
    // Create a new Rolle
    app.post("/rolle", rolle.create);
};