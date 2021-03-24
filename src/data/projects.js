let projects = [
	{
		title: 'MTGUtilities',
		affiliation: 'Independent',
		type: 'iOS App',
		repository: 'https://github.com/Timthetic/MTGUtilities',
		description: 'A simple iOS app that keeps a local store of Magic: The Gathering™ cards as well as life totals.',
		tech: ['iOS', 'Swift', 'Core Data', 'REST API'],
		id: 'MTGU'
	},
	{
		title: 'Bruin Quest App',
		affiliation: 'ACM Hack at UCLA',
		type: 'Web App',
		repository: 'https://github.com/uclaacm/bruin-quest-website',
		description: 'A web application that ACM at UCLA used to host "Bruin Quest" a remote puzzle solving competition. The app would provide the puzzles, verify answers, and keep score.',
		tech: ['MongoDB', 'Express', 'React', 'NodeJS', 'REST API', 'GCP'],
		id: 'BruinQuest'
	},
	{
		title: 'Wanderlust',
		affiliation: 'UCLA: CS 188 – Scalable Internet Services',
		type: 'Web App',
		repository: 'https://github.com/scalableinternetservicesarchive/wanderlust',
		description: 'A web application I created with a team for class. It was a location based art sharing platform that encouraged exploring (similar to Pokemon Go™).',
		tech: ['MySQL', 'React', 'NodeJS', 'GraphQL', 'k6', 'Honeycomb', 'load testing'],
		id: 'Wanderlust'
	},
	{
		title: 'DownToMeet',
		affiliation: 'UCLA: CS 130 – Software Engineering',
		type: 'Web App',
		repository: 'https://github.com/downToMeet/downToMeet',
		description: 'A web application I created with a team for class. It\'s a social networking app that focuses on getting people with similar interests together. It was inspired by my need to find other Magic: The Gathering™ players.',
		tech: ['Swagger', 'Go', 'JavaScript', 'REST API', 'Postgresql', 'React'],
		id: 'DownToMeet'
	},
	{
		title: 'GPU Optimization of CNN',
		affiliation: 'UCLA: CS 133 – Parallel and Distributed Systems',
		type: 'OpenCL CLI',
		repository: null,
		description: 'I sped up a Convolutional Neural Network by optimizing it for a GPU. This was a very interesting project because the GPU\'s architecture is very different than a CPU\'s. Optimizing it required a very different thought process than what I was used to.',
		tech: ['C++', 'OpenCL', 'AWS'],
		id: 'GPUOptimization'
	}
]

export default projects;