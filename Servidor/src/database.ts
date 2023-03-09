import mysql from 'promise-mysql';
import data from './data';

const pool  = mysql.createPool(data.database);
pool.getConnection() //instalar promise-mysql@3.3.1 si sale error en el getConnection
.then((connection: any ) =>{
    pool.releaseConnection(connection);
    console.log('Conexion exitosa con:', data.database.database);
});

export default pool;