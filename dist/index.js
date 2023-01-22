'use strict';

var _express = _interopRequireDefault(require('express'));
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
var cors = require('cors');
var app = (0, _express['default'])();
var PORT = process.env.PORT || 80;
app.use(cors());
var delay = 119;
var decDelay = delay;
function subtractTime() {
	setInterval(function () {
		if (decDelay > 0) {
			decDelay = decDelay - 1;
		} else if (decDelay == 0) {
			decDelay = delay;
			var foundIndex = users.findIndex(function (user) {
				return user.move === true;
			});
			users[foundIndex].move = false;
			if (users.length - 1 === foundIndex) {
				users[0].move = true;
			} else {
				users[foundIndex + 1].move = true;
			}
		}
	}, 1000);
}
subtractTime();
app.get('/timer', function (req, res) {
	res.status(201).json({
		timeLeft: decDelay
	});
});
app.get('/users', function (req, res) {
	try {
		res.status(200).json(users);
	} catch (_unused) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		});
	}
});
app.listen(PORT, function () {
	return console.log(
		'\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0435 '.concat(
			PORT
		)
	);
});
var users = [
	{
		id: 'dvhfso',
		name: 'User 1',
		move: true
	},
	{
		id: 'vmeorgi',
		name: 'User 2',
		move: false
	},
	{
		id: 'osjvrj',
		name: 'User 3',
		move: false
	}
];
