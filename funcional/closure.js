//É quando uma função "lembra" do seu arquivo onde foi criada, mesmo quando é executada fora de onde foi definida

const somar = require('./closureEscopo')

const x = 1000
console.log(somar())