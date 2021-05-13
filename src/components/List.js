import React from 'react';
import Item from './Item';

class List extends React.Component {

	render(){

		const {todos} = this.props;

		return(
			<div className="list">
				{
					todos.map((_todo, _index) => {
						return(
							<Item completeFunction={this.completeToDo} deleteFunction={this.deleteToDo} editFunction={this.editToDo} key={_index} todo={_todo}></Item>
						)
					})
				}
			</div>)
		}

	completeToDo = (todo) => {

		this.props.completeFunction(todo);
	}

	deleteToDo = (todo) => {

		this.props.deleteFunction(todo);
	}

	editToDo = (todo, edit) => {

		this.props.editFunction(todo, edit);
	}

}

export default List;
