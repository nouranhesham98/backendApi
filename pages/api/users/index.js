import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { createRouter } from "next-connect";

const router = createRouter()

await dbConnect();
router.get('/api/users', (req, res) => {
    User.find({})
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((e) => {
        res.status(500).send(e)
      })
  })
router.post("/api/users",async(req,res)=> {
    const newUser=new User(req.body)
    try {
        await newUser.save()
        res.send('Saved Successfully');
            }
            catch(error) {
        return res.status(400).json({message:' Sorry Something went wrong !'})

            }
})


export default router.handler()


/* function onError(err, req, res) {
    logger.log(err);
    // OR: console.error(err);
  
    res.status(500).end("Internal server error");
  }
  function onNoMatch(req, res) {
    res.status(404).end("page is not found... or is it!?");
  }

  export default router.handler({ onError,onNoMatch }); 
  */