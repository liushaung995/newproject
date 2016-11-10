/**
 * Created by liushuang on 16/10/20.
 */
var mongoose = require('./connect.js');
var collectionName = 'users';
var DB_URL = 'mongodb://localhost:27017/mydb';
// mongoose.connect(DB_URL);
var schema = new mongoose.Schema({
    username:{type:String},
    password:{type:Number},
    age:{type:Number},
    sex:{type:String}
}, { collection: collectionName });

schema.set('collection', collectionName);

var Actors;
var db = {};
Actors = mongoose.model('users', schema, collectionName);
db.save = function(user,callback,errorCall){
    // mongoose.connect(DB_URL)
    var content = {username:user.username,age:user.age,sex:user.sex,password:user.password};
    console.log(user)
    var ActorsInsert = new Actors(user);
    ActorsInsert.save(function(err){
        if(err){
            console.log(err);
            errorCall&&errorCall(err)
        }else{
            console.info('saved');
            callback&&callback()
        }
    })
}
db.find = function(content,callback){
    var field = {name:1};
    mongoose.connect(DB_URL)
    Actors.find(content,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
            callback(result)
        }
    });
}

db.update = function(oldValue,newData2){
    //var oldValue  = {age:20};
    // 单条件更新
    var newData1 = {$set:{name:"内容"}};
    // 多条件更新
    var newData2 = newData2||{$set:{name:"内容",age:2}};
    Actors.update(oldValue,newData2,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("update");
        }
    });
}

db.remove = function(content){
    Actors.remove(content, function(error){
        if(error) {
            console.log(error);
        } else {
            console.log('delete ok!');
        }
    })
}

module.exports = db;

//save('李学文',26,'人妖');
//find('李学文')
//update({_id:'5808816b442c792293428896'},{$set:{name:'李学文',age:2,sex:"男"}});