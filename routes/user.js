const express = require("express")
const router = express.Router()
const { handleGetAllUser, handleGetUserById, handleUpdateUserById, handleDelteUserById, handleCreateNewUser } = require("../controllers/user")
router.get("/", handleGetAllUser)
router.get("/:id", handleGetUserById)
router.post("/", handleCreateNewUser)
router.delete("/:id", handleDelteUserById)
router.patch("/:id", handleUpdateUserById)
module.exports=router

