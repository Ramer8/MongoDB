import express from "express"

const app = express()

//parsea el body
app.use(express.json())

const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
  console.log(`server is running" ${PORT}`)
})
