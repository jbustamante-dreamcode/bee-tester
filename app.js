const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require ('cors');
const noCache = require('nocache');

const routes = require('./src/routes');

require('./src/models/kitchen');
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(helmet.hsts({maxAge: 5184000}));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.permittedCrossDomainPolicies());
app.use(noCache());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.contentSecurityPolicy({directives: {defaultSrc: ["'self'"]}}));

app.use('/',routes);

module.exports = app;



