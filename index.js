var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    TodoModel = require('./models/todoModel');

var app = express();

app.set('view engine', 'ejs');  
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/todo', (req, res) => {
    TodoModel.find({}).exec((err, data) => {
        if(!err)
            res.json(data);
        else
            res.json(err);
    });
});

app.post('/todo', (req, res) => {
    var todo = req.body.todo;
    var t = new TodoModel({ todo : todo });
    t.save((err) => {
        if(!err)
            res.json(todo);
    });         
});

app.post('/todo/:id', (req, res) => {
    req.params
})

app.listen(3002, () => {
    console.log('listening in ' + 3002);

    mongoose.connect('mongodb://localhost/todo');
});