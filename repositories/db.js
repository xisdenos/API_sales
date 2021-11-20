import pg from 'pg';

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://jupplszq:FqQYqt4ORk7liiOLptABxVCj2Q3DfQ2T@fanny.db.elephantsql.com/jupplszq"
    });
    global.connection = pool;

    return pool.connect();
}

export{
    connect
}