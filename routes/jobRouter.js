const express = require('express');
const jobRouter = express.Router();

jobRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the jobs to you');
    })
    .post((req, res) => {
        res.end(`Will add the job: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /jobs');
    })
    .delete((req, res) => {
        res.end('Deleting all jobs');
    });

jobRouter.route('/:jobId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send datails of the job: ${req.params.jobId} to you.`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operations not supported on /jobs/${req.params.jobId}`)
    })
    .put((req, res, next) => {
        res.write(`Update the job: ${req.params.jobId}\n`);
        res.end(`Will update the job: ${req.body.name} with description: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting job: ${req.params.jobId}`)
    });

module.exports = jobRouter;
