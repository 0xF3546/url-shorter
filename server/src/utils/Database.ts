import mysql from 'mysql2';

class Database {
    private config = {
        host: "localhost",
        user: "root",
        password: "password",
        database: "url",
        port: 3306,
        connectionLimit: 100,
        charset: "utf8mb4"
    }

    private connection;

    constructor() {
        this.connection = mysql.createPool(this.config);

        this.connection.query("SELECT now() as time;", [], function (err, rows: any) {
            if (rows) {
                if (rows.length > 0) {
                    console.log('[INFO]\x1b[32m Initialized Database connection\x1b[0m.');
                } else console.log('[INFO] \x1b[31m Failed to initialize Database connection\x1b[0m.');
            } else console.log('[INFO]\x1b[31m Failed to initialize Database connection\x1b[0m.');
        });
    }

    query = async (sql: string, args: any = []) => {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }

    close = () => {
        return new Promise<void>((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

export default Database;