const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log(process.env);
    res.send(process.env.GITHUB_PAT);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
