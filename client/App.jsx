import React from "react";


export const App = ({questions, answers}) => {
	return (
		<>
			<h1>QA Tool</h1>
			{questions.map(({content, questionId}) => {
				return <section key={questionId}>
					<h3>{questionId}. {content}</h3>
				</section>
			})}
		</>
	)
}
