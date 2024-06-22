const express = require("express")
const router = express.Router();

const todoList = [
    {
    id:1,
    text:"react",
    status:false,
    },
]

router.get("/api/todo",(req,res) => {
    res.json(todoList);
})

module.exports = router;