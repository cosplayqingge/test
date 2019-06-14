/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-10 20:43:50
*/

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
	}
	handleAdd(){
		// console.log('aaa...')
		// this.state.list.push(this.state.value)
		this.setState({
			list:[...this.state.list,this.state.value],
			value:''
		})
	}
	handleChange(ev){
		// console.log(ev.target.value)
		// this.state.value = ev.target.value
		this.setState({
			value:ev.target.value,
		})
	}
	handleDelet(index){
		// console.log('del...',index)
		// this.state.list.splice(index,1)
		const list = [...this.state.list]
		list.splice(index,1)
		console.log(list)
		this.setState({
			list:list
		})

	}
	render(){
		return(
			<div className="App">
				<input onChange={this.handleChange.bind(this)} value={this.state.value}/>
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							// return(
							// 	<li 
							// 		key={index}
							// 		onClick={this.handleDelet.bind(this,index)}
							// 	>
							// 	{item}
							// 	</li>
							// )
							return <Item key={index} content={item} list={this.state.list} />
						})
					}
				</ul>
			</div>
		)
	}
}
export default App