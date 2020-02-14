const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('dist'));
app.get('/api/:file', (req, res) => {
    console.log(__dirname)
    fs.readFile( __dirname +'/' + req.params.file + ".json", 'utf8', function (err, data) {
        res.send(data);
        res.end( data );
    });

});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
