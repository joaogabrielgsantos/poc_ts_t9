import { QueryResult } from "pg";
import connectionDb from "../config/database.js"
import { User, UserEntity } from "../protocols/User.js";



async function findByEmail({ email }): Promise<QueryResult<User>> {
    return await connectionDb.query(`
    SELECT * FROM users WHERE email = $1;
    
    `, [email]
    );
}

async function create({ name, email, password }: User): Promise<QueryResult<User>> {
    return await connectionDb.query(`
    INSERT INTO users (name, email, password) 
    VALUES ($1, $2, $3);
    
    `, [name, email, password]
    );
}

async function listAll(): Promise<QueryResult<UserEntity>> {
    return connectionDb.query(`
    SELECT * FROM users;
    
    `
    );
}




export default {
    findByEmail,
    create,
    listAll
}