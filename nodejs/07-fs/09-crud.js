const fs = require('fs');
const util = require('util');

const filePath = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/*
const add = (name,callback)=>{
	//1.获取原有的数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{
			//console.log(data);
			//解析
			let arr = JSON.parse(data);
			//2.添加数据到原有的数据中
			arr.push({                             //前面是数字要用tostring方法然后要确保是4位用padstart；
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
				name:name
			});
			let strArr = JSON.stringify(arr);//转化为JSON字符串
			//3.保存
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					callback(err);
				}else{
					callback(null,arr);
				}
			})
		}
	});	
}
add('Tom',(err,data)=>{
	if(err){
		console.log('err::',err);
	}else{
		console.log(data);
	}
});
*/
async function add(name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);

	return arr;
	
}
add('Leo')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
