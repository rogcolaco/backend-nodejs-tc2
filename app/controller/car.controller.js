const db = require("../model");
const Car = db.car;

exports.add = (req, res) => {
    
     if(!req.body.plate){
        res.status(400).send({msg: "Informar a placa do carro."});
        return;
     }
     
    
    const car = new Car( {
        model: req.body.model,
        color: req.body.color,
        plate: req.body.plate,
        km: req.body.km,
    });

    car.save(car).then(data => {
        res.status(200).send({msg: "Novo Veículo cadastrado."});
        /* res.send(data); */
    })

};

exports.findAll = (req, res) => {

    var condition = {};

    Car.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter lista de veículos." })
    });
};

 exports.find = (req, res) => {

    const id = req.params.id;

    Car.findById(id).then(data => {
        if (!data) {
            res.status(404).send({ msg: "Veículo não cadastrado." });
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter dados do veículo com id = " + id })
    });

};

exports.delete = (req, res) => {

    const id = req.params.id;

    Car.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível remover o Veículo" })
        } else {
            res.send({ msg: "Veículo deletado com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao deletar o Veículo" });
    });

};

exports.update = (req, res) => {

    if (!req.body) {
        res.status(400).send({ msg: "Dados inválidos" });
        return;
    }

    const id = req.params.id;

    Car.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível atualizar os dados do Veículo" })
        } else {
            res.send({ msg: "Veículo atualizado com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao atualizar os dados do veículo" });
    });

}; 