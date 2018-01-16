import express from "express"
import path from "path"
import axios from "axios"


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/public`));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});


