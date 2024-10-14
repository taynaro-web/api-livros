const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const livrosRoutes = require('./routes/livros');

// Carregar as variáveis de ambiente
dotenv.config();

// Inicializar o app Express
const app = express();
app.use(express.json());  // Permitir o uso de JSON no corpo das requisições

// Conectar ao MongoDB usando o Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Usar as rotas de livros
app.use('/api/livros', livrosRoutes);

// Inicializar o servidor na porta especificada no arquivo .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando na porta ${PORT}'));
