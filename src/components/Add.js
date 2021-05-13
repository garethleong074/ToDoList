import React from 'react';

class Add extends React.Component {

	constructor(){

		super();
		this.state = {

			todo: ''
		};
	}

	render(){
		return(

			<div className='add'>
				<h1>ToDo List:</h1>

				<form onSubmit={(newToDo) => this.submit(newToDo)} >
					<input id='clear' onChange={(newToDo) => this.newToDo(newToDo)} type='text' placeholder="What needs to be done?"></input>
					<button type='submit'>Add To List</button>
				</form>
			</div>
		)
	}

	newToDo = (newToDo) => {
		this.setState({todo: newToDo.target.value});
	}

	submit = (newToDo) => {
		newToDo.preventDefault();
		this.props.addFunction(this.state.todo);
		document.getElementById('clear').value = '';
	}

}

export default Add;
