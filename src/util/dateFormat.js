const formatDate = (d) => {
	let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
	return `${mo}, ${ye}`
}

export default formatDate