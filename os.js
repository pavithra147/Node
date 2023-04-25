const osModule =require('os');

// console.log("CPU architecture"+os.arch());
// console.log("Returns free memory in the system in bytes"+os.freemem());
// console.log("Returns Total memory in the system in bytes"+os.totalmem());
// console.log('OS default directory for temp files : ' + os.tmpdir());


// Node.js program to demonstrate the
// os.EOL constants



// Printing os.EOL character(s) with string
console.log("Paragraphs always contains EOL"
		+ osModule.EOL + "EOL stands for end of line");

console.log("EOL varies from os to os" + osModule.EOL
			+ "For windows it is \\r\\n" + osModule.EOL
			+ "For POSIX it is \\n" + osModule.EOL);
