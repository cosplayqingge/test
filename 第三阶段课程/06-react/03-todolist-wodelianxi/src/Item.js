
import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	render(){
		//结构赋值
		const {handleDelet,content} = this.props;
		return (
			<li onClick={handleDelet}>
				{content}
			</li>
		)
	}
}
Item.propTypes = {
	handleDelet:PropTypes.func,
	content:PropTypes.string.isRequired
	// isRequired必须项必须传参
}
Item.DefaultProps = {
	content:'睡觉'
}

export default Item