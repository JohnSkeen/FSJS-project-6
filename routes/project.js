const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get( '/', ( req, res ) => {
  const numberOfProjects = projects.length;
  const projectId = Math.floor( Math.random() * numberOfProjects );
  res.redirect( `/project/${projectId}` )
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.render('project', projects[id]);
});

module.exports = router;
