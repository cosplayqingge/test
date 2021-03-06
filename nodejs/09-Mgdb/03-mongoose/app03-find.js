const mongoose = require('mongoose');

//1.连接数据库服务
mongoose.connect('mongodb://localhost/qinghuan', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	console.log('connection successful');
	//2.定义Schema
	const UserSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	});
	//3.生成模型Model
	//3.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变为复数
	//3.2 mongoose.model第二个参数指定Schema
	const UserModel = mongoose.model('user', UserSchema);


//查询文档

	//4.用模型操作数据(CRUD)
	//{}空对象表示全部
	/*
	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	UserModel.find({age:{$gt:100}},(err,docs)=>{
		if(err){
			console.log('find err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
								//让显示什么用字符串 看下面
	UserModel.find({age:{$gt:100}},"name age -_id",(err,docs)=>{
		if(err){
			console.log('find err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.find({age:{$gt:100}},"name age -_id",{skip:1},(err,docs)=>{
		if(err){
			console.log('find err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
						//skip在基本使用查看文档注意点里面的方法都可以使用
	UserModel.find({age:{$gt:100}},null,{skip:1},(err,docs)=>{
		if(err){
			console.log('find err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.find({age:{$gt:100}},null,{limit:2},(err,docs)=>{
		if(err){
			console.log('find err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.find({age:{$gt:100}},null,{sort:{age:-1}},(err,docs)=>{
		if(err){
			console.log('find err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.findById("5c9dd066e2937a320cdeca0d","name -_id",(err,doc)=>{
		if(err){
			console.log('findById err::',err);
		}else{
			console.log(doc);
		}		
	})
	*/
	
	UserModel.findOne({age:{$gt:100}},(err,doc)=>{
		if(err){
			console.log('findOne err::',err);
		}else{
			console.log(doc);
		}
	})
	







	
});