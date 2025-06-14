require('dotenv').config({path: '.env.local'});

const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('epilogue');
const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
    client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
})

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(async (req, res, next) => {
    try{        
        if(!req.headers.authorization) throw new Error ('Authorization header is required');

        const accessToken = req.headers.authorization.trim().split(' ')[1];
        
        await oktaJwtVerifier.verifyAccessToken(accessToken);  
        next();
    }catch (error) {
        next(error.message);
    }
});

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite',
});
  
const Post = database.define('posts', {
title: Sequelize.STRING,
body: Sequelize.TEXT,
});

epilogue.initialize({ app, sequelize: database });

epilogue.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id'],
});

const port = process.env.SERVER_PORT || 3001;

database.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});