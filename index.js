const express = require('express');
const db = require('./db.js');

const dbm = new db({
    host: 'localhost',
    user: 'root',
    password: ''
});

// dbm.selectDatabase('todoapp').createTable('alltos', {
//     id: 'int AUTO_INCREMENT,',
//     task: 'varchar(225) not null,',
//     done: 'bool not null default false,',
//     'PRIMARY KEY': '(id)'
// }).runQuery();

// dbm.setSqlQuery("CREATE DATABASE IF NOT EXISTS todoapp").runQuery();

dbm.selectDatabase('omfa').select().from('sellers').limit(2).runQuery();

const app = express();
// let string = ',okay,police,bat,siren,';
// let newstring = string.substr((string.length-1),(string.length));
// console.log(newstring);
app.listen(4000, () => {
    console.log(`Listening to port: 4000: Press ctrl + c to cancle/stop server`);
});