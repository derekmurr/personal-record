'use strict';

const { model: Run } = require('./runModel');

// Create a new run and add to the database
exports.createRun = async (runData) => {
  // 1. Create a run instance
  const run = new Run(runData);
  try {
    // 2. Save run to database
    const newRun = await run.save();
    // 3. return with created run
    return newRun;
  } catch (e) {
    // 4. If error, throw and controller will catch
    throw e;
  }
};

// List all runs from a particular user
exports.listRuns = async (id) => {
  try {
    const allRuns = await Run.find({userId: id});
    return allRuns;
  } catch (e) {
    throw e;
  }
};

// Get a particular run by id
exports.getRunById = async (runId) => {
  try {
    const run = await Run.findById(runId);
    return run;
  } catch (e) {
    throw e;
  }
}

// Find and delete a particular run by id
exports.deleteRun = async(runId) => {
  try {
    const run = await Run.findByIdAndDelete(runId);
    return run;
  } catch (e) {
    throw e;
  }
}

// Find and edit a particular run by id
exports.editRun = async (runId, update) => {
  try {
    const run = await Run.findByIdAndUpdate(runId, update);
    return run;
  } catch (e) {
    throw e;
  }
}