const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  anoPublicacao: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Livro', LivroSchema);