const service = require('./dbService');

module.exports = {
    adicionarDados: async (req, res) => {
        var params = req.body;

        var data = {
            table: "cepUser",
            aditional: "WHERE cep = " + params.cep
        };
        var api = await service.readData(data);

        if (api == "") {
            data = {
                table: "cepUser",
                fields: ["cep", "localidade", "bairro", "logradouro", "uf"],
                values: [
                    params.cep,
                    params.localidade,
                    params.bairro,
                    params.logradouro,
                    params.uf
                ]
            };

            api = await service.addData(data);
        }

        data = {
            table: "users",
            fields: ["user_name", "user_nasc", "user_cep"],
            values: [
                params.nome,
                params.nasc,
                params.cep
            ]
        };
        api = await service.addData(data);
        console.log(api);

        if (api.affectedRows > 0) {
            res.json({ message: "Cadastro concluído.", api });
        } else {
            res.json({ message: "Erro no cadastro." });
        }
    }
}