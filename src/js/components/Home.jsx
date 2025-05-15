import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const[ inputValue, setInputValue ] = useState("hola");
	const[ todos, setTodos ] = useState([]);	
console.log(todos);
	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li>
					<input 
						type="text" 
						onChange={(event)=>setInputValue(event.target.value)}
						value={inputValue}
						onKeyDown= {(e)=> e.key === 'Enter' ? setTodos(todos.concat(inputValue)) : null}
						placeholder="What needs to be done?"/>
				</li>
					{todos.map((todo, index) => (<li key={index}><div className="d-flex justify-content-between">
					<div>{todo}</div>
					<div 
						onClick={()=>setTodos(todos.filter((_,currentIndex)=> index != currentIndex))}>
					X
					</div>
					</div>
				</li>))}
			</ul>
			<div>
				{todos.length} tasks
			</div>
		</div>
	);
};

export default Home;