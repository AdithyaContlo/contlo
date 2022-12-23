const express = require("express")
const PORT = 3030
const app = express()
app.use(express.static('../dist'));
app.listen(PORT, () => console.log(`Running server at PORT ${PORT}`))