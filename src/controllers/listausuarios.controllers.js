import User from "../models/user";

const showUsers = async (req, res) => {
    try {
      //voy obtener un array con los productos guardados en BD
      const usersList = await User.find();
      res.status(200).json(usersList);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Error getting users list" });
    }
  };

  const getOneUser = async (req, res) => {
    try {
      console.log(req.params);
  
      //buscamos el user en mi BD
      const userSearch = await User.findById(req.params.id);
      res.status(200).json(userSearch);
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: "Error searching for the requested user" });
    }
  };

  const updateUser = async (req, res) => {
    try {
      //buscamos el producto por id y lo modifico con los datos que me llegan desde el body
  
      await User.findByIdAndUpdate(req.params.id, req.body);
      console.log('BODY',req.body)
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: "Error searching for the requested user" });
    }
  };

  export {
    showUsers, getOneUser, updateUser
  };