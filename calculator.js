const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// urlencoded() function is a built-in middleware function in Express.
// It parses incoming requests with urlencoded payloads and is based on body-parser.

// The app.use() function is used to mount(climb) the specified middleware function(s) at 
// the path which is being specified.
// It is mostly used to set up middleware for your application.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    let w = parseFloat(req.body.weight);
    let h = parseFloat(req.body.height);

    let bmi = w/(h**2);
    let status;
    if(bmi < 18.5) status = "underweight";
    else if(bmi >= 18.5 && bmi < 24.9) status = "healthy";
    else if(bmi >= 25 && bmi < 29.9) status = "overweight";
    else status = "obese";
    res.send(`Your BMI is: ${bmi} and you are ${status}.`);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});