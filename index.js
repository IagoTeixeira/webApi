const customExpress = require("./config/customexpress");

const app = customExpress()

app.listen(3000, () => console.log("Servido na porta 3000"))