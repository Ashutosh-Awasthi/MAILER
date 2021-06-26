const Mail = require('../models/Mail')

function Mailer(req,res){
    let data = {
        sender: req.locals.decoded._id,
        data: req.body.data,
        receivers: req.body.receivers
    }

    Mail.create(data,(err,nMail)=>{
        if(!err)
            res.json(nMail)
        else
            res.json(false)
    })
}

module.exports = Mailer