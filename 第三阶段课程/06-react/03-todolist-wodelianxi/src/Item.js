/*
* @Author: TomChen
* @Date:   2019-04-09 20:41:19
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-10 20:37:05
*/
import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props);
	}
	handleDel(){
		console.log(this.props.list)
	}
	render(){
		return (
			<li onClick={this.handleDel.bind(this)}>
				{this.props.content}
			</li>
		)
	}
}

export default Item