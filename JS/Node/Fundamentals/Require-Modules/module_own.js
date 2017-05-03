const fs = require('fs');

function loadModule(fileaname, module, require){
	const wrappedSrc =
		'(function(module,exports,require){' +
			fs.readFileSync(fileaname, 'utf8') +
			'})(module, module.exports, require);'
	eval(wrappedSrc)
}

const require = sjf
