var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'ec2-54-77-40-202.eu-west-1.compute.amazonaws.com',
	user:'mnfscqnanxekkz', //Your Database User Name
	password:'d304faa1fb1be57a90983b5362c073265e1141d82a3c9ff5baf10fea4f4048ab', // Your Database Password
	database:'d30v76tql31930'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;