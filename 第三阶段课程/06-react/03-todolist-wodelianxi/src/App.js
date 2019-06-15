

import React,{ Component,Fragment } from 'react'
import { DatePicker,Button } from 'antd';

import Item from './Item.js'
import './App.css'
// import 'antd/dist/antd.css'; 

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","情歌"],
			value:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		// console.log('aaa...')
		// this.state.list.push(this.state.value)
		// this.setState({
		// 	list:[...this.state.list,this.state.value],
		// 	value:''
		// })
		// this.setState(()=>{
		// 	return {
		// 		list:[...this.state.list,this.state.value],
		//  		value:''
		// 	}
		// })
		// this.setState((preState)=>{
		// 	return {
		// 		list:[...preState.list,preState.value],
		//  		value:''
		// 	}
		// })
		this.setState(preState=>({
				list:[...preState.list,preState.value],
		 		value:''
		}))
	}
	handleChange(ev){
		// console.log(ev.target.value)
		// this.state.value = ev.target.value
		// this.setState({
		// 	value:ev.target.value,
		// })
		const value = ev.target.value
		this.setState(()=>({
			value:value
		}));
	}                       
	handleDelet(index){
		// console.log('del...',index)
		// this.state.list.splice(index,1)
		const list = [...this.state.list]
		list.splice(index,1)
		console.log(list)
		// this.setState({
		// 	list:list
		// })
		this.setState(()=>({
			list
		}))

	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDelet={this.handleDelet.bind(this,index)} />
		})
	}
	render(){
		return(
			<div className="App">
				<input onChange={this.handleChange} value={this.state.value}/>
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}
export default App