import Pedido from "../models/pedido";


const showPedidos = async (req, res) => {
    try {
        //voy obtener un array con los pedidos guardados en BD
        const pedidosList = await Pedido.find();
        res.status(200).json(pedidosList);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Error getting pedidos list" });
    }
};

const createPedido = async (req, res) => {
    try {
      console.log('DESDE PEDIDO EN BACK', req.body);
  
      const { pedido, uid, estado  } = req.body;
  
      //crear un objeto para guardarlo en la BD
      const newPedido = new Pedido({
        /* productName: req.body.productName,
              price: req.body.price,
              urlImg: req.body.urlImg,
              category: req.body.category */
  
        pedido,
        uid,
        estado
      });
  
      //guardar en BD
  
      await newPedido.save();
      res.status(201).json({ message: "Pedido created successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error creating pedido" });
    }
  };

  const getOnePedido = async (req, res) => {
    try {
      console.log(req.params);
  
      //buscamos el producto en mi BD
      const pedidoSearch = await Pedido.findById(req.params.id);
      res.status(200).json(pedidoSearch);
      console.log('ONE PEDIDO', pedidoSearch);
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: "Error searching for the requested pedido" });
    }
  };

  const updatePedido = async (req, res) => {
    try {
      //buscamos el producto por id y lo modifico con los datos que me llegan desde el body

      console.log('DESDE PEDIDO EDICION EN BACK', req.body);
      console.log('DESDE PEDIDO EDICION ID EN BACK', req.params.id);
  
      await Pedido.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: "Error searching for the requested product" });
    }
  };

  const deletePedido = async (req, res) => {
    try {
      //buscar el producto por su id  y luego lo elimino
      await Pedido.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Pedido successfully deleted " });
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: "Error searching for the requested product" });
    }
  };


export {
    showPedidos,
    createPedido,
    getOnePedido,
    updatePedido,
    deletePedido
};
