const express = require("express")
const User = require("../model/User")
const database = require("../database/database")
const Op = database.Sequelize.Op

module.exports = {


    async create(req, res){
        if(req.body.nome == "" || req.body.email == "" || req.body.password == ""){
            res.status(400).json({erro: "Verifique se todos os campos estão preenchidos"});
        }
        try{
            const userCollection = await User.create({
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password,
                status: 1,
            })
            res.status(201).json({msg: "Usuário criado com sucesso"})
        }catch(erro){
            console.log(erro)
            res.status(400).json(erro);
        }
    },

    async delete(req, res){
        const id = req.params.id
        if(id){
            try{
                User.destroy({
                    where: {
                        id: id
                    }
                })
            
                res.status(201).json({msg: "Usuário deletado com sucesso"})

            }catch(erro){
                console.log(erro)
                res.status(400).json(erro);
            }
        }else{
            res.status(400).json({erro: "ID não encontrado"});
        }
    },

    async update(req, res){
        const id = req.params.id

        if(id){
            try{
                const userCollection = await User.findOne({
                    id: id
                  });
            
                  if (userCollection) {

                    const updatedUser = await userCollection.update({
                        nome: req.body.nome,
                        email: req.body.email,
                        password: req.body.password,
                    });
              
                    res.status(201).json({msg: "Usuário editado com sucesso"})
                  }else{
                    res.status(404).json({msg: "Usuário não encontrado"});
                  }

            }catch(erro){
                console.log(erro)
                res.status(400).json(erro);
            }
        }else{
            res.status(400).json({erro: "ID não encontrado"});
        }
    }
}