import SQLite from 'react-native-sqlite-storage'
import { Credential } from './types'
// Create Table (name,locations) with Error handling 
const db = SQLite.openDatabase(
  { name: 'EduchainDB.db', location: 'default' },
  () => console.log('DB opened'),
  (error:any) => console.error('DB Error:', error)
)


export const initDB=():Promise<void> => {
    return new Promise((resolve,reject)=>{
        db.transaction((tx:any)=>{
            tx.executeSql(
                `CREATE TABLE IF NOT EXIST credential(
                id TEXT PRIMARY KEY 
                studentId TEXT NOT NULL 
                voiceHash TEXT NOT NULL 
                skill TEXT NOT NULL 
                timestamp INTEGER
                vClock TEXT
                )`,[],()=>console.log('Table created'),(_:any,error:any)=>console.log(`Create table error ${error.message}`) 
                
            )
        })
    })
}
export const addCredentials=(cred:Credential):Promise<void> => {
    return new Promise((resolve,reject)=>{
        db.transaction((tx:any)=>{
            tx.executeSql(`
                INSERT INTO credentials
                (id,studentDid,voiceHash,skill,score,timestamp,vclock))
                VALUES(?,?,?,?,?,?,?)`,[
                    cred.id,
                    cred.score,
                    cred.skill,
                    cred.studentDid,
                    cred.timestamp,
                    cred.vClock,
                    cred.voiceHash
                ]),(_:any,results:any)=>{
                    console.log(`credential saved Id ${cred.id}`);
                    resolve()
                },(_:any,error:any)=>{
                    console.log(`insert failed  ${error}`);
                    reject(error)
                }
                
        })
    })
}
export const getCredentialsById=(id:string):Promise<Credential | null> => {
    return new Promise((resolve)=>{
        db.transaction((tx:any)=>{
            tx.executeSql(`
                SELECT * FROM credentials WHERE id= ?
                `,[id],
                (_:any,{rows}:any)=>{
                    if (rows.length>0){
                        resolve(rows.item(0) as Credential)
                    }else{
                        resolve(null)
                    }
                },
                (_:any,error:any)=>{
                    console.error(`Query Failed `+error);
                    resolve(null)
                }
            )
        })
    })
}