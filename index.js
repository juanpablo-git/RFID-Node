const {SerialPort,ReadlineParser} = require("serialport")
const parser = new ReadlineParser()
const pot = new SerialPort({path:"/dev/ttyACM0",baudRate:9600})
pot.pipe(parser) 
"04 08 4B 42 84 60 80"
var dados = []

parser.on('data',function(data){
    let stringSplit = data.split(":") 
    dados[stringSplit[0]]= stringSplit[1]
    console.log(dados['Card UID'])
})
