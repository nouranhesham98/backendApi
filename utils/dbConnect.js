const mongoose=require('mongoose');

export default async function dbConnect() {
    try
    {
      await  mongoose.connect('mongodb+srv://noranhesham46:Nanuu@cluster0.0pg3agz.mongodb.net/' ,
      {useUnifiedTopology:true},{useNewUrlParser:true});

      console.log('Connected Successfully')
    } catch (error) {
       console.log(error);
    }
}