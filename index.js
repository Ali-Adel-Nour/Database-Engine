const mysql = require('mysql2/promise')

connectMyISAM()

async  function  connectMyISAM(){


  try{
    const con = await mysql.createConnection({
      "host": "localhost",
      "port": 3306,
      "user": "root",
      "password": '123',
      "database": "test"
    })
    await con.beginTransaction()
await con.query("INSERT INTO employees_myisam (name) values (?)", ["Ali"])

await con.commit()
    await con.close()

    console.log(result)
  }
  catch (ex){
    console.error(ex)
  }
}

/*
connectMyInnoDB()

async  function  connectMyInnoDB(){


  try{
    const con = await mysql.createConnection({
      "host": "localhost",
      "port": 3306,
      "user": "root",
      "password": '123',
      "database": "test"
    })
    await con.beginTransaction()
await con.query("INSERT INTO employees_myinno (name) values (?)", ["Ali"])

await con.commit()
    await con.close()

    console.log(result)
  }
  catch (ex){
    console.error(ex)
  }
}
*/