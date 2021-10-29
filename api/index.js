const server = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`)
})