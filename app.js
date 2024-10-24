const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Hello World! - server");
    res.render('home', {message:null});
});


app.post('/', (req,res) => {
    if (req.body.number) {
        let number = req.body.number;
        res.render('home', {message: buckleConverter(number)});
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

function buckleConverter(number) {
    let message;
    if (number < 1 || number > 10)
        {
            message = "Please enter a number between 1 and 10.";
        }
        else if (number == 1 || number == 2) {
            message = "1, 2, buckle my shoe.";
        }
        else if (number == 3 || number == 4) {
            message = "3, 4, shut the door.";
        }
        else if (number == 5 || number == 6) {
            message = "5, 6, pick up sticks.";
        }
        else if (number == 7 || number == 8) {
            message = "7, 8, lay them straight.";
        }
        else if (number == 9 || number == 10) {
            message ="9, 10, a big fat hen.";
        }
        return message;
};