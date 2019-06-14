const mark = (suggestion: string, searchString: string) => {
	const startPosition = suggestion.toLowerCase().indexOf(searchString.toLowerCase());
	const endPosition = startPosition + searchString.length;
	return {
		beginning: suggestion.slice(0, startPosition),
		middle: suggestion.slice(startPosition, endPosition),
		end: suggestion.slice(endPosition, suggestion.length)
	}
}

export default mark;