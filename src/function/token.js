import('express')
const token = ({}) => {
    return async function (req,res)
    {  
        const head = req.body
        console.log(head)
        return head 
    }
}

module.exports = token 