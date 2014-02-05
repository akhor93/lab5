var data = require("../data.json");
exports.addFriend = function(req, res) {
	var name = req.query.name;
	var description = req.query.description;
	var new_friend = {
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}
	console.log(new_friend);
	data["friends"].push(new_friend);
	res.render('add', data);
}