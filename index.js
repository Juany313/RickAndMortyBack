const server = require("./src/server");
const {database} = require("./src/db")
const PORT = 3001;


database.sync({alter: true}).then(()=>{
    server.listen(PORT, ()=>{
        console.log("Listening in port", PORT);
    });
});

