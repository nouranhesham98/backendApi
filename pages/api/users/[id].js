import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import { createRouter } from "next-connect";

const router = createRouter()

dbConnect();
//get specific User
router.get('/api/users/:id', (req, res) => {
   
    const id = req.params.id
    User.findById(id).then((user) => {
        if (!user) {
          return res.status(404).send('Unable to find')
        }
        res.status(200).send(user)
      })
      .catch((e) => {
        res.status(500).send(e)
      })
  })

// Edit Specific Data
router.patch('/api/users/:id', async (req, res) => {
    try {
      //key of object--> array
  
      const updates = Object.keys(req.body)  //btefsely l key 3an l value
      const allowedUpdates = ['name', 'age']
      const user = await User.findById(req.params.id)
  
      if (!user) {
        return res.status(404).send('No user found')
      }
      updates.forEach((el) => (user[el] = req.body[el]))
      await user.save()
      res.status(200).send(user)
    } catch (e) {
      res.status(400).send(e)
    }
  })


//Delete by id
router.delete('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      if (!user) {
        return res.status(404).send('No user found')
      }
      res.status(200).send(user)
      console.log('Deleted')
    } catch (e) {
      res.status(500).send(e)
    }
  })



  
  export default router.handler()
