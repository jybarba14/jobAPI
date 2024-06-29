const express = require('express');
const companyRouter = express.Router();

companyRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the companies to you');
    })
    .post((req, res) => {
        res.end(`Will add the company: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /companys');
    })
    .delete((req, res) => {
        res.end('Deleting all companies');
    });

companyRouter.route('/:companyId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send datails of the company: ${req.params.companyId} to you.`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operations not supported on /companys/${req.params.companyId}`)
    })
    .put((req, res, next) => {
        res.write(`Update the company: ${req.params.companyId}\n`);
        res.end(`Will update the company: ${req.body.name} with description: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting company: ${req.params.companyId}`)
    });

module.exports = companyRouter;
