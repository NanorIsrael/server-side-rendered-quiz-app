export const handleVotes = (answers, answerId, increment) => {
	return answers.map((ans)=> {

		if (ans.answerId != answerId) {
			return ans;
		}

		return {...ans, upvotes: ans.upvotes + increment};
	})
}