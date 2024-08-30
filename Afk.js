const { Client } = require('@minecraft-js/bedrock-client');

// Настройки подключения
const client = new Client({
  host: 'minecraft.kazaknodes.online', // IP сервера
  port: 19132, // Порт сервера Bedrock Edition по умолчанию
  version: '1.20.0.01', // Версия клиента
  username: 'AFKBot', // Имя игрока-бота
  offline: false, // Режим онлайн
});

// Подключение к серверу
client.connect();

client.on('connect', () => {
  console.log('Бот подключился к серверу!');
});

client.on('disconnect', (reason) => {
  console.log('Бот отключен: ', reason);
});

client.on('error', (err) => {
  console.log('Произошла ошибка: ', err);
});

// AFK-бот: ничего не делаем, чтобы оставаться AFK
