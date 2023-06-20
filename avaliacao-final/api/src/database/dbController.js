const service = require('./dbService');

module.exports = {
    listarCep: async (req, res) => {
        const data = {
            table: "cepUser",
            aditional: "WHERE cep = "
        };
        const api = await service.readData(data);
        console.log(api);

        res.json(api)
    },

    adicionarDados: async (req, res) => {
        var name = req.body.name;
        var nasc = req.body.nasc;
        var param = req.body;
        console.log(param);

        /*
        var cep = [
            req.body.cep,
            req.body.cidade,
            req.body.bairro,
            req.body.rua,
            req.body.uf
        ];
        const data = {
            table: "cep",
            fields: ["cep", "cidade", "bairro", "rua", "uf"],
            values: cep
        };
        const api = await service.addData(data);
        console.log(api);*/

        /*
        if (api.affectedRows > 0) {
            res.json({ message: "Cadastro concluído.", id: api.insertId });
        } else {
            res.json({ message: "Erro no cadastro." });
        }*/
    },

    /*
    adicionarCategoria: async (req, res) => {
        var name = req.body.name;
        const data = {
            table: "categoria",
            fields: ["name"],
            values: [name]
        };
        const api = await service.addData(data);
        console.log(api);

        if (api.affectedRows > 0) {
            res.json({ message: "Cadastro concluído.", id: api.insertId });
        } else {
            res.json({ message: "Erro no cadastro." });
        }
    },*/

    atualizarCategoria: async (req, res) => {
        var id = req.params.index;
        var name = req.body.name;
        const data = {
            table: "categoria",
            fields: ["name"],
            where: "id = ?",
            values: [name, id]
        };
        const api = await service.updateData(data);
        console.log(api);

        if (api.affectedRows > 0) {
            res.json({ message: "Atualização concluída." });
        } else {
            res.json({ message: "Erro na atualização do registro" });
        }
    },

    deletarDados: async (req, res) => {
        var id = req.params.index;
        const data = {
            table: "users",
            where: "user_id = ?",
            values: [id]
        };
        const api = await service.removeData(data);
        console.log(api);

        if (api.affectedRows > 0) {
            res.json({ message: "Registro excluído com sucesso." });
        } else {
            res.json({ message: "Erro ao deletar o registro." });
        }
    }
}