const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');

// Criar um novo livro (Create)
router.post('/', async (req, res) => {
  const livro = new Livro(req.body);
  try {
    const novoLivro = await livro.save();
    res.status(201).json(novoLivro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Listar todos os livros (Read)
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Listar um livro por ID (Read)
router.get('/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json(livro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Atualizar um livro (Update)
router.put('/:id', async (req, res) => {
  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livroAtualizado) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json(livroAtualizado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Deletar um livro (Delete)
router.delete('/:id', async (req, res) => {
  try {
    const livroDeletado = await Livro.findByIdAndDelete(req.params.id);
    if (!livroDeletado) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json({ message: 'Livro deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;