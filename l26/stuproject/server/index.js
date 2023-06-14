const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";

app.post("/create",(req, res) => {
	MongoClient.connect(url, (err,database) => {
		if (err)
		{
			console.log(err)
		}
		else
		{
			const dbo = database.db("ishika23aug22");
			const data = {"_id":req.body.rno,"name":req.body.name, "marks":req.body.marks};
			dbo.collection("student").insertOne(data,(err, result) => {
					if (err)
						res.send(err);
					else
						res.send(result);
					})
		}
	})
})


app.get("/view",(req, res) => {
	MongoClient.connection(url, (err,database) => {
		if (err)
		{
			console.log(err)
		}
		else
		{
			const dbo = database.db("ishika23aug22");
			const data = {"_id":req.body.rno};
			console.log(data);
			dbo.collection("student").deleteOne(data,(err, result) => {
					if (err)
						res.send(err);
					else
						res.send(result);
					})
		}
	})
})

app.delete("/remove",(req, res) => {
	MongoClient.connection(url, (err,database) => {
		if (err)
		{
			console.log(err)
		}
		else
		{
			const dbo = database.db("ishika23aug22");
			dbo.collection("student").find({}).toArray((err, result) => {
					if (err)
						res.send(err);
					else
						res.send(result);
					})
		}
	})
})

app.listen(9000, () => {console.log("Server ready at 9000")})