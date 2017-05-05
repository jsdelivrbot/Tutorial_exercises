
//Simulate async process and send the data back via process

process.send('Module loaded');

(function(){


	let counter = 0;

	setInterval(()=>{

		counter += 4000
		process.send(`${counter}ms have passed`);

	},4000)

})()
