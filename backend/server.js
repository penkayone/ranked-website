const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend работает!');
});

// Пример авторизации (заглушка)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Пример простой логики
    if (username === 'admin' && password === '1234') {
        res.json({ success: true, token: 'FAKE_JWT_TOKEN' });
    } else {
        res.status(401).json({ success: false, message: 'Неверный логин или пароль' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
