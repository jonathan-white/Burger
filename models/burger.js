var orm = require("../config/orm");

var burger = {
	viewAll: function(cb){
		orm.selectAll('burgers', cb);
	},
	addBurger: function(burgerInfo, cb){
		orm.insertOne('burgers', burgerInfo, cb);
	},
	eatBurger: function(burgerInfo, cb){
		orm.updateOne('burgers', burgerInfo, cb);
	}
};

module.exports = burger;