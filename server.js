const express = require('express');
const cors = require('cors');
const fileSystem = require('fs');
const app = express();
const port = 3000;
const importJSON = fileSystem.readFileSync('budget.json', 'utf8');
const budgetData = JSON.parse(importJSON);

app.use(cors());


<<<<<<< HEAD
app.get('/budget', (req, res) => {
    res.json(budgetData);
});
=======
>>>>>>> 5d21a9661195a375d2eef2d6bc7564028316b22c

app.listen(port, () =>
{
console.log(`API app listening at http://localhost:${port}`);
}
<<<<<<< HEAD
);
=======
);

app.get('/budget', (req, res) => {
    res.json(budget);
});


>>>>>>> 5d21a9661195a375d2eef2d6bc7564028316b22c
