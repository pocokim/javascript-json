var readline = require('readline');
var validator = require('./validator');
var parser = require('./parser');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(input) {
    try {
        if (validator.validate(input)) {
            var result = parser.parse(input);
            console.log(result);
        }
    } catch(exception) {
        console.log(exception.message);
    }

    rl.close();
});
