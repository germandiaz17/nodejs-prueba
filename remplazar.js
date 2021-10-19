const fs = require('fs')

fs.readFile("./saludo.txt", {encoding:"utf8"}, (err, data) => {
    if(!err){
        let content = data
        content = content.replace("german", "karen")
        fs.writeFile("saludo.txt", content, (err) => {
            if(!err) {
                console.log("se ha escrito en el archivo")
            }
        })
        console.log(content)
    }else {
        console.log(err)
    }
})