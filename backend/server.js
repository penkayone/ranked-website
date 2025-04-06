const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3001;
const SECRET_KEY = 'mysecretkey';

app.use(cors());
app.use(bodyParser.json());

// 🔐 Пример одного пользователя
const users = [
    {
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10), // хешированный пароль
    }
];

// 📩 Авторизация
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user) return res.status(401).json({ message: 'Пользователь не найден' });

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return res.status(401).json({ message: 'Неверный пароль' });

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// 🛡️ Защищённый маршрут
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Нет токена' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: 'Доступ разрешён 🎉', userId: decoded.username });
    } catch (err) {
        res.status(401).json({ message: 'Неверный токен' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
