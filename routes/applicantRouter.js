const express = require('express');
const applicantRouter = express.Router();

applicantRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the applicants to you');
    })
    .post((req, res) => {
        res.end(`Will add the applicant: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /applicants');
    })
    .delete((req, res) => {
        res.end('Deleting all applicants');
    });

applicantRouter.route('/:applicantId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send datails of the applicant: ${req.params.applicantId} to you.`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operrations not supported on /applicants/${req.params.applicantId}`)
    })
    .put((req, res, next) => {
        res.write(`Write the applicant: ${req.params.applicantId}\n`);
        res.end(`Will update the applicant: ${req.body.name} with description: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting applicant: ${req.params.applicantId}`)
    });

module.exports = applicantRouter;
