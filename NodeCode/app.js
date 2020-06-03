var bodyParser = require('body-parser');
//parse the body into json Object
var express = require('express');
var app = express();
const http = require('http');
// Used to transfer data on http 
var mysql = require('mysql');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Tableau-Auth");
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));


app.set('port', 3236);
var server = http.createServer(app);
server.listen(3236, () => {
	console.log("server started running");
})
var mysql = require('mysql');


app.post('/add', (req, res) => {
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});
	res.send(req.body);
	console.log(req.body);
	bookid = req.body.Bookid;
	bookname = req.body.Bookname;
	bookauthor = req.body.Bookauthor;
	bookprice = req.body.Bookprice;

	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO Adddata VALUES ('" + bookid + "','" + bookname + "','" + bookauthor + "','" + bookprice + "')";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
			console.log("data of book added");
		});
	});
})

app.post('/deladmin', (req, res) => {
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});

	console.log(req.body);
	var q = req.body.Adminid;
	var r = req.body.Adminpass;

	con.query("SELECT * FROM Deldata WHERE ID='" + q + "' AND Password='" + r + "'", function (err, result, fields) {
		if (err) {
			console.log("You doesnt matches the login credentials");
		} else {
			console.log(result);
			if (result.length > 0) {
				console.log("Admin matched");
				res.send(result);
			} else {
				console.log("admin data cant be matched");
				res.send("0");
			}
		}
	})
})

app.post('/deldataofbook', (req, res) => {
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});

	console.log("Now I can delete the book");
	console.log(req.body);
	const k = req.body.bookdel;

	con.query("DELETE FROM Adddata WHERE BookID = '" + req.body.bookdel + "'", function (err, result, fields) {
		if (err) {
			console.log(err);
		} else {
			console.log(result, "got it");
			console.log(result.affectedRows);
			if (result.affectedRows == 0) {
				res.send("0");
			}
			if (result.affectedRows == 1) {
				res.send("1");
			}
		}
	})
})

app.post('/sbyid', (req, res) => {
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});

	console.log(req.body);
	con.connect(function (err) {
		if (err) throw err;
		con.query("SELECT * FROM Adddata WHERE BookID = '" + req.body.Idbook + "'", function (err, result) {
			if (err) throw err;
			if (result.length > 0) {
				console.log(result);
				console.log(result[0].BookID);
				res.send(result);
			} else {

				console.log("The book u searched cannot be found");
			}
		});
	});

})
app.post('/sbyau', (req, res) => {
	console.log("SEARCHING BY AUTHOR");
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});

	console.log(req.body);
	con.connect(function (err) {
		if (err) throw err;
		con.query("SELECT * FROM Adddata WHERE BookAuthor = '" + req.body.authbook + "'", function (err, result) {
			if (err) throw err;
			if (result.length > 0) {
				console.log(result);
				console.log(result[0].BookAuthor);
				res.send(result);
			} else {
				console.log("The book u searched cannot be found");
			}
		});
	});

})
app.post('/sbyna', (req, res) => {
	console.log("SEARCHING BY NAME");
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});

	console.log(req.body);
	con.connect(function (err) {
		if (err) throw err;
		con.query("SELECT * FROM Adddata WHERE BookName = '" + req.body.Booknam + "'", function (err, result) {
			if (err) throw err;
			if (result.length > 0) {
				console.log(result);
				console.log(result[0].BookName);
				res.send(result);
			} else {
				console.log("The book u searched cannot be found");
			}
		});
	});

})

app.post('/updatedat', (req, res) => {
	console.log("Into book Updating");
	var con = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "Vishnu"
	});

	console.log(req.body);

	con.connect(function (err) {
		if (err) throw err;
		var sql = "UPDATE Adddata SET BookName = '" + req.body.Bookname + "', BookAuthor='" + req.body.Bookauthor + "' ,BookPrice='" + req.body.Bookprice + "' WHERE BookID = '" + req.body.Bookid + "' ";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log(result);
			console.log(result.affectedRows);
			if (result.affectedRows == 1) {
				res.send("1");
			} else {
				res.send("0");
				console.log("their is something wrong ");
			}

		});
	});
})