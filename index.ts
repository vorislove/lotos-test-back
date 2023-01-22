import express, { Express, Request, Response } from 'express';

const cors = require('cors');
const app: Express = express();
const PORT = process.env.PORT || 80;

let corsOptions = {
	origin: ['http://localhost:3000']
};

app.use(cors(corsOptions));

const delay = 119000;
let decDelay = delay;

function subtractTime() {
	setInterval(() => {
		if (decDelay > 0) {
			decDelay = decDelay - 1000;
		} else if (decDelay == 0) {
			decDelay = delay;
			const foundIndex = users.findIndex((user) => user.move === true);
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

app.get('/timer', (req: Request, res: Response) => {
	res.status(201).json({ timeLeft: decDelay });
});

app.get('/users', (req: Request, res: Response) => {
	try {
		res.status(200).json(users);
	} catch {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
	}
});

app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));

const users: IUser[] = [
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

interface IUser {
	id: string;
	name: string;
	move: boolean;
}
