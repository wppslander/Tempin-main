import PessoaModel from "../crud/user.js";

function adduser(req, res) {
    PessoaModel.create({
      nome: req.body.name,
      cidade1: req.body.cidade1,
      cidade2: req.body.cidade2,
      cidade3: req.body.cidade3,
    }).then((result) => res.json(result));