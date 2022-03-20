const db = require('../config/connection');
const { Projects } = require('../models');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
    
    await Projects.deleteMany({});

    await Projects.create(projectSeeds);

  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  

  console.log('all done!');
  process.exit(0);
});
