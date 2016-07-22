var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = (() => {
    var todoSchema = new Schema({
        todo : String,
        createdIn : { type : Date, default : Date.now() },
        done : { type : Boolean, default : false } 
    });

    return mongoose.model('Todo', todoSchema);    
})();
