const schema = require("../Model/Schema");

module.exports.AddData = async (req, res) => {
  await schema.find({}).then((data) => {
    res.status(200).json({ msg: "this is data", Info: data });
  });
};

module.exports.SendData = async (req, res) => {
  await schema.create(req.body).then((data) => {
    res.status(200).json({ record: req.body });
  });
};

module.exports.DeleteData=async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.status(200).json({msg:"deleted"})
    })
}

module.exports.EditData=async(req,res)=>{
    await schema.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
        res.status(200).json({msg:"updated"})
    })
}