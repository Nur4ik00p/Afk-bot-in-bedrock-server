const { createClient } = require('bedrock-protocol');

const options = {
  host: 'minecraft.kazaknodes.online', // Замените на адрес вашего сервера
  port: 19132, // Замените на порт вашего сервера
  username: 'AFKBot', // Имя бота
  offline: false // Если сервер не требует аутентификации Xbox Live, установите true
};

const client = createClient(options);

client.on('loggedIn', () => {
  console.log('Бот успешно подключился к серверу!');
});

client.on('disconnect', (packet) => {
  console.log('Бот был отключен:', packet);
});

client.on('error', (error) => {
  console.log('Произошла ошибка:', error);
});

// Пример команды чтобы бот прыгал каждые 10 секунд
setInterval(() => {
  client.queue('player_action', { action: 'jump' });
  console.log('Бот совершил прыжок');
}, 10000);
