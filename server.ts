/*
view engine:
1. ejs 
2. mustache
3. handlebars
*/

import express,{Application,Request,Response} from "express";
import ejs from "ejs"
import mustacheExpress from "mustache-express";

const app:Application=express()

const Hostname:string="127.0.0.1";
const port:number=7576;


app.engine("mustache",mustacheExpress());
app.set("view engine","mustache");

// app.set("view engine","ejs");

// app.get("/",(request:Request,response:Response)=>{
//     response.status(200).json({
//         msg:"this is home page"
//     })
// })
// app.get("/index",(request:Request,response:Response)=>{
//     let model={x:1000,y:20};
//     response.render("index",model)
// })

// app.get("/login",(request:Request,response:Response)=>{
//     let model={uname:"qode",upwd:"qode@123"};
//     response.render("login",model)
// })


app.get("/student",(request:Request,response:Response)=>{
    let model={
        studentId:"S002",
        studentName:"Ghanshyam",
        studentMarks:86,
        subject:[
            {name:"math",marks:"89"},
            {name:"Science",marks:"98"},
            {name:"english",marks:"78"}
        ]
    };
    response.render("student",model)
})


app.listen(port,Hostname,()=>{
    console.log(`server started at http://${Hostname}:${port}`)
})

