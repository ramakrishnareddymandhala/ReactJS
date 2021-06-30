const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");

//crate the rest object
const app = express();



app.use(express.json());


app.use(express.urlencoded({extended:false}));


app.use(cors());

const dbClient = mongodb.MongoClient;

app.get("/products",(req,res)=>{
    dbClient.connect("mongodb+srv://admin:admin@cluster0.gb2ri.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else {
            const db= connection.db("miniproject");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else {
                    res.send(array);
                }
            });
        }
    }
    );
});


//rest APi based on Category
app.get("/products/:category",(req,res)=>{

    dbClient.connect("mongodb+srv://admin:admin@cluster0.gb2ri.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("miniproject");
            db.collection("products").find({"category":req.params.category}).toArray((err,array)=>{

                if(err) throw err;
                else {
                    res.send(array);
                }
            });
        }
    });

})


let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("seever ready");
});