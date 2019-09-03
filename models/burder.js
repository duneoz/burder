var orm = require("../config/orm.js");
var burders = {
	selectAll: function(cb){
		orm.selectAll("burders", function(res){
			cb(res);
		});
	},

	insertOne: function(cols,vals,cb){
		orm.insertOne("burders", cols, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb){
		orm.updateOne("burders", objColVals, condition, function(res){
			cb(res);
		});
	},
};

module.exports = burders;