function log(msg) {
	let date = new Date();
	console.log(`${date.toString()}\t${msg}`)
}

module.exports = { log }
