import React from 'react';
import {Button} from 'react-bootstrap';
import './style.css';

class Item extends React.Component {

	constructor(){

		super();
		this.state = {

			edit: ''
		};
	}	

	render(){

		const {todo} = this.props;

		return(
			<div className={'item' + (todo.completed ? ' completed' : '')}> 

				- {todo.text}
			
				<form onSubmit={(updatedToDo) => this.submit(updatedToDo)}>
					<input id='clear' onChange={(updatedToDo) => this.edit(updatedToDo)} type='text'></input>
					<button type='submit' value="this.props.todo">Update</button>
				</form>

				<Button className="button" value="this.props.todo" onClick={this.complete}> Complete </Button>
				<Button className="button" value="this.props.todo" onClick={this.delete}> Delete </Button>

			</div>
		);
	}

	complete = () => {

		this.props.completeFunction(this.props.todo);
	}

	delete = () => {

		this.props.deleteFunction(this.props.todo);
	}

	edit = (updatedToDo) => {

		this.setState({edit: updatedToDo.target.value});
	}

	submit = (updatedToDo) => {

		updatedToDo.preventDefault();
		this.props.editFunction(this.props.todo, this.state.edit);
		document.getElementById('clear').value = '';
	}

}

export default Item;
