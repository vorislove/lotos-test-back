"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 80;
app.use(cors());
const delay = 119000;
let decDelay = delay;
function subtractTime() {
    setInterval(() => {
        if (decDelay > 0) {
            decDelay = decDelay - 1000;
        }
        else if (decDelay == 0) {
            decDelay = delay;
            console.log(decDelay);
            const foundIndex = users.findIndex((user) => user.move === true);
            users[foundIndex].move = false;
            if (users.length - 1 === foundIndex) {
                users[0].move = true;
            }
            else {
                users[foundIndex + 1].move = true;
            }
        }
    }, 1000);
}
subtractTime();
app.get('/timer', (req, res) => {
    res.status(201).json({ timeLeft: decDelay });
});
app.get('/users', (req, res) => {
    try {
        res.status(200).json(users);
    }
    catch (_a) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});
app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
const users = [
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
//# sourceMappingURL=index.js.map