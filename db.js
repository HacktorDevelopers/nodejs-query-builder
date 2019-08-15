const mysql = require('mysql');

class DB {
    constructor(dbconfig = {
        host: 'localhost',
        user: 'root',
        password: ''
    }){
        this._conn  = mysql.createConnection(dbconfig, (error) => {
            if(error)
                console.log(error);
            else
                return this._conn;
        });
    }

    /**
     * this function creates table
     * @param table name
     * @param props table properties
     * @returns this class to enable function chain
     */

     createTable(tbname, props = {}){
         this._sql = `CREATE TABLE IF NOT EXISTS ${this._db}.${tbname} (`;
         for(let i in props){
             this._sql += `${i} ${props[i]}`;
         }
         this._sql += ')';
         this.setSqlQuery(this._sql);
         return this;
     }

     /**
      * @returns sql query
      */
     getSqlQuery(){
        //  return this._sql;
        console.log(this._sql);
     }

    /**
     * @returns this
     */
    setSqlQuery(sql){
        this._sql = sql;
        return this;
    }

    /**
     * @returns sql query
     */
    selectDatabase(dbname){
        this._db = dbname;
        return this;
    }

     /**
      * this function run query
      * @return this
      */
     runQuery(){
         this._conn.query(this._sql, (error, result) => {
             if(error){
                 this._error = error;
                 this.getError()
             }
             this._result = result;
             this.getResult();
         });
     }

     /**
      * this function returns error
      * @return error
      */

    getError(){
        if(this._error){
            let error = {
                message: this._error.sqlMessage,
            }
            console.log(error);
        }
        return false;
    }

    /**
    * this function run query
    * @return this
    */

    getResult(){
        if(this._result){
            // console.log(`Action Successfull: ${this._result}`);
            console.log(this._result);
        }
        return false;
    }

    /**
     * this function add limit to the query
     * @param limit default 5
     */
    limit(limit = 5){
        this._sql += ` LIMIT ${limit} `;
        return this;
    }

    /**
     * this function is use to select from the database
     * @param field to select
     */
    select(col = "*"){
        this._sql = `SELECT ${col} `;
        this.setSqlQuery(this._sql);
        this.getSqlQuery();
        return this;
    }

    /**
     * this function is use to select db
     * @param from table to select from
     */
    from(table){
        this._sql += `FROM ${this._db}.${table}`;
        this.setSqlQuery(this._sql);
        this.getSqlQuery();
        return this;
    }


}

module.exports = DB;