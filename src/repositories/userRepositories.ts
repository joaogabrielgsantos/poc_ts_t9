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
    SELECT id, name, email FROM users;
    
    `
    );
}

async function deleteById(userId: number): Promise<QueryResult<UserEntity>> {
    return connectionDb.query(`
    DELETE FROM users WHERE "id" = $1;

    `, [userId]);
}

async function updateById(userId: number, name: string): Promise<QueryResult<UserEntity>> {
    return connectionDb.query(`
    UPDATE users SET name = $1 WHERE id = $2;
    
    `, [name, userId]);
}

export default {
    findByEmail,
    create,
    listAll,
    deleteById,
    updateById
}