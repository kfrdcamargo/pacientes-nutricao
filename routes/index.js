var express = require('express');
var router = express.Router();
var db = require('../config/db');

// GET /  -> busca todos os pacientes no MySQL e envia para a página
router.get('/', async function (req, res, next) {
  try {
    const [pacientes] = await db.query('SELECT * FROM pacientes ORDER BY id');
    res.render('index', { title: 'Pacientes', pacientes: pacientes });
  } catch (err) {
    next(err);
  }
});

// POST /itens  -> grava o novo paciente no MySQL e volta para a lista
router.post('/itens', async function (req, res, next) {
  const { nome, genero, data_nascimento, cpf, telefone, email } = req.body;
  try {
    await db.query(
      'INSERT INTO pacientes (nome, genero, data_nascimento, cpf, telefone, email) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, genero, data_nascimento, cpf.replace(/\D/g, ''), telefone.replace(/\D/g, ''), email]
    );
    res.redirect('/#pacientes');
  } catch (err) {
    next(err);
  }
});

// GET /itens/:id/editar  -> mostra o formulário preenchido com os dados do paciente
router.get('/itens/:id/editar', async function (req, res, next) {
  try {
    const [linhas] = await db.query('SELECT * FROM pacientes WHERE id = ?', [req.params.id]);
    if (linhas.length === 0) return res.redirect('/#pacientes');
    res.render('editar', { title: 'Editar paciente', p: linhas[0] });
  } catch (err) {
    next(err);
  }
});

// POST /itens/:id/editar  -> atualiza o paciente no MySQL e volta para a lista
router.post('/itens/:id/editar', async function (req, res, next) {
  const { nome, genero, data_nascimento, cpf, telefone, email } = req.body;
  try {
    await db.query(
      'UPDATE pacientes SET nome = ?, genero = ?, data_nascimento = ?, cpf = ?, telefone = ?, email = ? WHERE id = ?',
      [nome, genero, data_nascimento, cpf.replace(/\D/g, ''), telefone.replace(/\D/g, ''), email, req.params.id]
    );
    res.redirect('/#pacientes');
  } catch (err) {
    next(err);
  }
});

// POST /itens/:id/excluir  -> apaga o paciente e volta para a lista
router.post('/itens/:id/excluir', async function (req, res, next) {
  try {
    await db.query('DELETE FROM pacientes WHERE id = ?', [req.params.id]);
    res.redirect('/#pacientes');
  } catch (err) {
    next(err);
  }
});

module.exports = router;