const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('dist'));
app.get('/api/:file', (req, res) => {
    fs.readFile( __dirname +'/api/' + req.params.file + ".json", 'utf8', function (err, data) {
        res.send(data);
        res.end( data );
    });

});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
