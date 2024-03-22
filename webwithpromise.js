const { readFile } = require('fs').promises;

app.get('./', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8'))

})