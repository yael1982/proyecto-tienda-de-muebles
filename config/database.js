const mysql = require("mysql2");

const databaseConnection=mysql.createConnection({
    host:"b2vpdy9flghu1fwtahw4-mysql.services.clever-cloud.com",
    user:"ukwuympbqqwfnczu",
    database:"b2vpdy9flghu1fwtahw4",
    password:"8Vz0rH2CGDuEOtHzYblk"
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor conectado a MySQL")
    }
});

module.exports= databaseConnection;