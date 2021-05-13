import React from 'react';
import './App.css';
import List from './components/List';
import Add from './components/Add';


class App extends React.Component {

	constructor(){

		super();

		this.state = {

			todos:[],
			index:0
		};
	}

	render(){

		return(
			<div>
				<Add addFunction={this.add}></Add>
				<List completeFunction={this.complete} deleteFunction={this.delete} editFunction={this.edit} todos={this.state.todos}></List>
			</div>
		)
	}

	componentDidMount = () => {

		const todos = localStorage.getItem('todos');
		const index = localStorage.getItem('index');
		
		if(todos) {

			const todo = JSON.parse(todos);
			const indexes = JSON.parse(index);
			this.setState({todos : todo});
			this.setState({index : indexes})
		}
	}

	add = async (todo) => {

		this.setState({index: this.state.index + 1});
		await this.setState({
			todos:[...this.state.todos, {
				index: this.state.index,
				text: todo, 
				completed: false
			}]
		})

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
		localStorage.setItem('index', JSON.stringify(this.state.index));
	}

	complete = async (todo) => {

		const newToDos = this.state.todos.map(originalToDo => {
		
			if (todo === originalToDo)
				return {

					index: todo.index,
					text: todo.text,
					completed: !todo.completed
				}

			else return originalToDo
		});

		await this.setState({todos: newToDos})
		console.log(newToDos)

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}

	delete = async (todo) => {

		this.setState({todos:[...this.state.todos]});
		var newToDos = [...this.state.todos];

		var index = newToDos.indexOf(todo);

		if (index !== -1){

			newToDos.splice(index, 1);
			await this.setState({todos: newToDos});
		}

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}
	
	edit = async (todo, edit) => {

		const newToDos = this.state.todos.map(originalToDo => {
		
			if (todo === originalToDo)
				return {

					index: todo.index,
					text: edit,
					completed: todo.completed
				}

			else return originalToDo
		});

		await this.setState({todos: newToDos})
		console.log(newToDos)

		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}

}

export default App;
