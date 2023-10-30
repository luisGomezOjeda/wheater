module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,webp,js,css,scss,html,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};