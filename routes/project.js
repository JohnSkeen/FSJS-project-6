const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// this, similar to the cards app we built, sends the user to a randomized project page if they somehow got to /project without selecting an ID!
router.get( '/', ( req, res ) => {
  const numberOfProjects = projects.length;
  const projectId = Math.floor( Math.random() * numberOfProjects );
  res.redirect( `/project/${projectId}` )
});

// this sends the user to a project/:ID page and passes to it the data required to fill out the pug
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.render('project', projects[id]);
});

module.exports = router;
