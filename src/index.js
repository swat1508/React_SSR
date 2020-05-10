/*
const express= require('express');
const React = require('react');
const renderToString=require('react-dom/server').renderToString;
const Home=require('./client/components/Home').default;
*/
import express from 'express';
//import React from 'react';
//import {renderToString} from 'react-dom/server';
//import Home from './client/components/Home';
import renderer from './helpers/renderer';

const app = express();
app.use(express.static('public'));
const PORT=3000;
//app.get('/',(req,res) => {
app.get('*',(req,res) => {
    res.send(renderer(req));
});

app.listen(PORT,() =>{
    console.log(`PORT is running successfully on ${PORT}`);
});

