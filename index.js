const express = require("express");
const app = express();
app.use(express.json());
const courses = [
  {
    id: 1,
    name: "javascript",
  },
  {
    id: 2,
    name: "react",
  },
  {
    id: 3,
    name: "FSD",
  },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/courses", function (req, res) {
  res.send(courses);
});
app.get("/courses/:id", function (req, res) {
  let courseId = req.params.id;
  var course =  courses.find((c) => c.id === parseInt(courseId));
  if(!course) {
    res.status(404).send("Course not found");
  } else {
    res.send(course);
  }
});

app.post("/course",function(req,res){
    if(req.body.name === ""){
        res.send("Wrong Input");
    }
    else {
        var course = {
            id:courses.length + 1,
            name:req.body.name
        };
        courses.push(course);
        res.send(course);
    }
});

app.listen(3000);
console.log("listening the server on port 3000");
