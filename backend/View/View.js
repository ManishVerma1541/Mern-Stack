import {User,Person} from "../models/Models.js";


export const userRagister = async(req,res)=>{
    try{
        const {name , email , password} = req.body;
        let user = await User.findOne({email})
        
        if(user){
            return res.status(400).json({
                message : "User Already exist"
            }) 
        }
        if(!user) {
            const user = new User ({name , email , password});
            await user.save()
            return res.status(200).json({
                message : "User registered successfully"
            })
        }
       
    }
    catch(error){
        res.status(500).json({
            message : " Server Error"
        })
        
    }
}
export const Login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user =await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message : " Invalid user Name Or Password"
            })
        }
        if (password !== user.password){
            return res.status(403).json({
                message : " invalid password"
            })
        }
        return res.status(200).json({
            message : " Log In Successfully"
        })


    }
    catch(error){
        return res.status(500).json({
            message : "Internel Server Error"
        })
    }
}

export const AddPerson = async (req, res) => {
  const { firstName, lastName, email, age, gender } = req.body;
  console.log(req.body);
  if (!firstName || !lastName || !email || !age || !gender) {
    return res.status(400).json({
      message: "All fields are Required",
    });
  }

  const person = await Person.findOne({ email });
  if (person) {
    return res.status(400).json({
      message: "User is already exist",
    });
  }
  const personData = Person.create({
    firstName,
    lastName,
    email,
    age,
    gender,
  });
  res.status(200).json({
    message: "Person ragister Succesfully",
  });

  return personData;
};

export const getPersonByid = async (res, req) => {
  
  const person = await Person.findById(req.params);
  if (!person) {
    return res.status(404).json({
        message : "person not found"
    });
    
  }
  const personData = {
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.email,
    age: person.age,
    gender: person.gender,
  };
  res.status(200).json({
    message: "User Found",
    personData,
  });
};

export const updatePersonByid = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, age, gender } = req.body;
  const personPrevData = Person.findById(id);
  if (!personPrevData) {
    res.status(400).json({
      message: " Person not found",
    });
  }
  const personUpdated = await Person.findByIdAndUpdate(
    id,
    { firstName, lastName, email, age, gender },
    { new: true }
  );
  if (!personUpdated) {
    return res.status(400).json({
      message: "Person is not Updated",
    });
  }
  return res.status(200).json({
    message: "Person Updated Suceesfully",
  });
};

export const deletePersonById = async(res,req)=>{
  const {id} = req.param;
  const result = await Person.deleteOne({_id : id});
  if(!result) {
      return res.status(404).json(
          `User not found : ${id}`
      )
  }

  if (result.deletedCount === 1){
      return res.status(200).json(
           `User deleted successfully by id : ${id}`
      )
  }
}