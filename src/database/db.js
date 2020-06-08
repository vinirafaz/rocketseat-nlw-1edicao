//importar a dependencia do SQLite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações de banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizar o objeto de banco de dados
db.serialize(() => {
    //Criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    //Inserir dados
    // const query = `INSERT INTO places (image, name, address, address2, state, city, items) VALUES(?,?,?,?,?,?,?);`
    
    // const values = [
    //     "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]
    
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
        
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // Consultar os dados
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log(rows)
    // })


    //Deletar um dado
    // db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Resgistro deletado com sucesso")
    // })

})
