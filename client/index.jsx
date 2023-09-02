import React from "react";
import {createRoot, hydrateRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import {App} from './App';

const root = createRoot(document.getElementById("root"));

// root.render(<App/>);
let state = undefined

// const data = new Promise((resolve, reject))
fetch('/data')
.then(data => data.json())
.then(res => {
	state = res
	console.log("", state)
	render();
})
.catch((error) => {
	console.log(error)
})
const handleVotes = (answerId, increment) => {

	state.answers = state.answers.map((ans)=> {

		if (ans.answerId != answerId) {
			// ans.upvotes += increment
			return ans;
		}

		return {...ans, upvotes: ans.upvotes + 1};
	})
	console.log(state.answers);

	render();2
}
function render() {
	root.render(
		<App {...state} handleVotes={handleVotes}/>
	)
}
// document.addEventListener("DOMContentLoaded", function() {
// 	// Your code here
// 	render()
//   });
  