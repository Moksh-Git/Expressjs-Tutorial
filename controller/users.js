import fs from "fs";
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

export const createUser = (req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.send({response:'data pushed'})
}

export const getAllUsers = (req,res) => {
    res.json(users)
} 

export const getUser = (req,res) => {
    const id = +req.params.id 
    const user = users.filter((item)=>item.id===id)
    res.json(user)
}

export const replaceUser = (req,res) => {
    const id = +req.params.id 
    const useridx = users.filter((item)=>item.id===id)
    users.splice(useridx,1,{...req.body,id})
    res.json({product:"Updated"})
}

export const updateUser =(req,res) => {
    const id = +req.params.id;
    const useridx = users.filter((item)=>item.id===id)
    const user = users[useridx]
    users.splice(useridx,1,{...user,...req.body})
    res.send({user:"patch updated"})

}

export const deleteUser = (req,res)=>{
    const id = +req.params.id
    const useridx = users.filter((item)=>item.id===id)
    users.splice(productidx,1)
    res.send({type:'DELETE'})
}