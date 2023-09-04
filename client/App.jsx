import React from "react";


export const App = ({questions, answers, handleVotes}) => {
	return (
		<>
			<h1>QA Tool</h1>
			{questions.map(({content, questionId}) => {
				return <section key={questionId}>
					<h3>{questionId}. {content}</h3>
					<div>
						{answers.filter(ans => ans.questionId === questionId).map(
							({content, upvotes, answerId}) => (
								<div key={answerId}>
									<p><span>{content}</span>&nbsp;-&nbsp;<span>{upvotes}</span>
									&nbsp;<button onClick={() => handleVotes(answerId, 1)}>+</button>
									&nbsp;<button onClick={() => handleVotes(answerId, -1)}>-</button>
									</p>
								</div>
							)
						)}
					</div>
				</section>
			})}
		</>
	)
}
