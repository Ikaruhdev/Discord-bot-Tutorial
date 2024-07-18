require('dotenv').config();
// Importa o módulo 'dotenv' e carrega as variáveis de ambiente do arquivo '.env' para o 'process.env'.

const { Client, GatewayIntentBits } = require('discord.js');
// Importa as classes 'Client' e 'GatewayIntentBits' da biblioteca 'discord.js'.

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// Cria uma nova instância do cliente Discord, configurando-a para receber eventos relacionados a servidores (guilds).

client.once('ready', () => {
    console.log('Bot está online!');
});
// Define um evento que será executado apenas uma vez quando o bot estiver pronto. Imprime "Bot está online!" no console.

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});
// Define um evento que será executado sempre que uma nova mensagem for criada. 
// Se a mensagem for '!ping', o bot responderá com 'Pong!'.

client.login(process.env.TOKEN);
// Faz login no Discord usando o token do bot armazenado na variável de ambiente 'TOKEN'.
