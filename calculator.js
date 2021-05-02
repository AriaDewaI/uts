const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
	console.log('listening on port 3000');
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);
	var bmi = weight / ((height/100) * (height/100));
	
	
	if (bmi < 19) {
        res.send("<h3>Hai! " +
                 " BMI anda adalah: " + bmi +
                 "<centre><h1>Berat badan anda kurang dari normal!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h3>Hai! " +
                 " BMI anda adalah: " + bmi +
                 "<centre><h1>Berat badan anda normal!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>Hai! " +
                 " BMI anda adalah: " + bmi +
                 "<centre><h1>Berat badan anda lebih dari normal!");
    } else {
        res.send("<h3>Hai! " +
                 " BMI anda adalah: " + bmi +
                 "<centre><h1>Anda Obesitas!");
    }
})
