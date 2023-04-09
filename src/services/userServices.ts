import bcrypt from 'bcrypt'
import { User, UserEntity } from '../protocols/User.js'
import userRepositories from '../repositories/userRepositories.js'

async function signup ({name, email, password}: User){
    const { rowCount: userExist } = await userRepositories.findByEmail({email})
    if (userExist) throw new Error("User already exists")

    const hashPassword = await bcrypt.hash(password, 10)
    await userRepositories.create({name, email, password: hashPassword})
    
}

async function listAll(){
    const resultado = await userRepositories.listAll()
    return resultado
}


export default {
    signup,
    listAll
}