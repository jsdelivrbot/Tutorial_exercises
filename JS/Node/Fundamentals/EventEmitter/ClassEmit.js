/*
*
* Beating the race condition when setting an event emitter using
* process.nextTick()
*
*/

const EventEmitter = require('events').EventEmitter;
const util = require('util');
const fs = require('fs');

class getIt extends EventEmitter {

	constructor(){
		super();
		this.date = new Date();
		this.emit('instantiated', this.date)
	}


}

module.exports = { getIt };
