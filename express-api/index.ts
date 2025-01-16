import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    res.status(201).json({
        ok: false,
        msg: 'Nuevo id: 123123123'
    })

    res.json({
        ok: true,
        msg: 'Salio bien'
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
