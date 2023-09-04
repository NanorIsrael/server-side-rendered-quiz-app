import React from "react";
import {createRoot, hydrateRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import {App} from './App';
import {handleVotes} from '../shared/utility'

const root = hydrateRoot(document.getElementById("root"), null);

let state = undefined

 new Promise(async (resolve, reject)=> {
	try {
		const res = await fetch('/data')
		const data = await res.json();
	
		if (data) {
			state = data
			resolve();
			render()
		}
	} catch (err) {
		console.log(err)
	}
})
function handleModifiedVotes(answerId, increment) {
	state.answers = handleVotes(state.answers, answerId, increment);
	
	fetch(`vote/?answerId=${answerId}&increment=${increment}`);
	
	render();
}


function render() {
	root.render(
		<App {...state} handleVotes={handleModifiedVotes}/>
	)
}
