function Playing() {
	return (
		<p>Try to make each dice the same value! Lock a dice's value by clicking it!</p>
	)
}

function Won() {
	return (
		<p>You did it!</p>
	)
}

function Lost() {
	return (
		<p>All die must have the same value!</p>
	)
}

export { Playing, Won, Lost }