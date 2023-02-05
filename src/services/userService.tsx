import { User } from "../interfaces/usersInterface";

const DB_USERS_KEY = 'arrNewUsers';

function getUsersDB(): User[]{
    const usersDBKey = localStorage.getItem(DB_USERS_KEY);
    let usersDB = usersDBKey ? JSON.parse(usersDBKey) : []; 
    usersDB = Array.isArray(usersDB) ? usersDB : [];

    return usersDB;
}

export function getAllUsers(): User[]{
    return getUsersDB();
}

export function getUserById(user: User): User | undefined{
    let usersDB = getUsersDB();

    return usersDB.find((el:User) => el.id === user.id);
}

export function createUser(newUser: User) {
    let users = getUsersDB();
    users.map((el:any)=> el.email).includes(newUser.email)?
    console.log('is'): users.push(newUser);   
    
    return users;
}

export function updateUser() {}
export function deleteUser() {}