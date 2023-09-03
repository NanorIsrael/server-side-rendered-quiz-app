import React from "react";
import {createRoot, hydrateRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import {App} from './App';

const root = createRoot(document.getElementById("root"));

let state = undefined

 new Promise(async (resolve, reject)=> {
	try {
		const res = await fetch('/data')
		const data = await res.json();
	
		if (data) {
			state = data
			console.log("", state)
			resolve();
			render()
		}
	} catch (err) {
		console.log(err)
	}
})
function handleModifiedVotes(answerId) {
	state.answer = handleVotes(state.answer, answerId, increment);
}

function render() {
	root.render(
		<App {...state} handleVotes={handleModifiedVotes}/>
	)
}
