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

async function deleteUser(userId: number) {
    const result = await userRepositories.deleteById(userId)
    if (!result.rowCount) throw new Error("User does not exists")
    return result
    
}

async function updateName(userId: number, name: string) {
    const result = await userRepositories.updateById(userId, name)
    if (!result.rowCount) throw new Error("User does not exists")
    return result
    
}

export default {
    signup,
    listAll,
    deleteUser,
    updateName
}