import joi from "joi"

const SignupValidation = (req,res,next) => {
    const schema = joi.object({
        name : joi.string().min().max(100).required(),
        email : joi.string().email().required(),
        password : joi.string().min(6).max(100).required()
    });

    const {error} = schema.validate(req.body)
    if (error){
        return res.status(400).json({
            message : "Bad Request"
        })

    }
    next();
}

const LoginValidation = (req,res,next) => {
    const schema = joi.object({
        
        email : joi.string().email().required(),
        password : joi.string().min(6).max(100).required()
    });

    const {error} = schema.validate(req.body)
    if (error){
        return res.status(400).json({
            message : "Bad Request"
        })

    }
    next();
    
}