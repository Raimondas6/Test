const express = require("express")
const router = express.Router()
const {fileList,
        scanFiles,
} = require("../controllers/mainController")

router.get('/list', fileList)
router.post('/scan', scanFiles)

module.exports = router