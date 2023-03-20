const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var http=require('http')

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/")));

//USERS

const users = [
  {
    id: 1,
    email: "teszt@teszt.teszt",
    password: "teszt",
  },
  {
    id: 2,
    email: "teszt2@te.t",
    password: "t",
  },
];


var data=JSON.stringify({
  id:users.length+1,
  email:'teszt@teszt.t',
  password: 'pw'
})

var options={
  host:'localhost',
  port:port,
  path:'/new',
  method:'POST',
  headers:{
    'Content-Type':'application/json;charset=utf-8',
    'Content-Length': data.length
  }
};
var req=http.request(options,function(res){
  var msg=''

  res.setEncoding('utf-8')
  res.on('data',function(chunk){
    msg+=chunk
  })
  res.on('end',function(){
    console.log(JSON.parse(msg))
  })
})
// req.write(data)
req.end()


//CRUD

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  return found
    ? res.json(users.filter((user) => user.id === parseInt(req.params.id)))
    : res.status(400).json({
      status: "error",
      error: `Not found ID: ${req.params.id}`,
    });
});

app.post("/new", (req, res) => {
  const { email, password } = req.body;
  const newUser = {
    id: users.length + 1,
    email: email,
    password: password,
  };
  
  if (!newUser.email) {
    return res.status(400).json({
      status: "error",
      error: "Invalid email",
    });
  }
  if (!newUser.password) {
    return res.status(400).json({
      status: "error",
      error: "Invalid password",
    });
  }

  res.status(200).json({
    status: "Valid login",
    data: req.body,
  });
  users.push(newUser);
  // console.log(users)
});

app.delete("/users/delete/:id", (req, res) => {
  const { id } = req.params;
  const delIndex = users.findIndex((el) => el.id == id);
  users.splice(delIndex, 1);
  return res.json(users);
});

app.put("/users/update/:id", (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  const updIndex = users.findIndex((el) => el.id == id);
  users[updIndex].email = email;
  users[updIndex].password = password;
  return res.json(users);
});


app.listen(port, () => console.log("Running"));
