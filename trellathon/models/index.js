const userTable = require("../models/user");
const userVideoTable = require("../models/user-video");
const userFollowTable = require("../models/user-follow");
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user : "postgres",
    password : "utsav",
    host : "localhost",
    port : 5432,
    database : "Trellathon"
});



async function execute(){
    try{
        await client.connect();
        console.log("DB is connected successfully");   
    }
    catch(err){
        console.log(err)
    } 
}

async function initialiseTables(){

    let promises = [];
    const tables = [];
    try{
        for(let i = 0;i < tables.length;i++){
            promises.push(
                client.query(tables[i]).then((info)=>{
                    // console.log(info);
                }).catch((err)=>{
                    console.log(err);
                })
            );
        }

        await Promise.all(promises);
    }
    catch(err){
        console.log(err);
    }
}


async function initDBAndTables(){
    let promises = [];
    promises.push(execute());
    promises.push(initialiseTables());

    await Promise.all(promises);
}




module.exports = {
    initDBAndTables : initDBAndTables,
    execute : execute,
    client : client
}