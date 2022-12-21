module.exports = app => {
    const skill = require("../controller/skill.controller.js");

    // Create a new Skill
    app.post("/skill", skill.create);

    // GET all Skill
    app.get("/skill", skill.findAll);

    // GET one single Skill with skillId
    app.get("/skill/id:skillId", skill.findOneId);

        // // GET one single Skill with skillId
        // app.get("/skill/skill/:skillSkill", skill.findOneSkill);

    // Update one Skill with skillId
    app.put("/skill/:skillId", skill.update);

    // Delete the Skill with skillId
    app.delete("/skill/:skillId", skill.delete);

    // Delete all Skill
    app.delete("/skill", skill.deleteAll);
};