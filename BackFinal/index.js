import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

const watchSchema = new mongoose.Schema({
    img:String,
    title:String,
    price:Number
  });

  const watchModel = mongoose.model('Watch', watchSchema);

app.get('/',async (req, res) => {
    const watchs = await watchModel.find()
  res.send(watchs)
})

app.get('/:id', async (req, res) => {
    const {id} =req.params
    const watchs = await watchModel.findById(id)
    res.send(watchs)
  })
  
  app.post('/',async (req, res) => {
    const {img,title,price} =req.body
    const newWatchs = new watchModel({img,title,price})
    await newWatchs.save()
    res.send(newWatchs)
  })
  
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  
  app.delete('/:id',async (req, res) => {
    const {id} =req.params
    const watchs = await watchModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })

  mongoose.connect("mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/")
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})