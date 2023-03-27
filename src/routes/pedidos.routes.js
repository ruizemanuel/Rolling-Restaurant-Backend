import { Router } from "express";
import {
    showPedidos, createPedido, getOnePedido, updatePedido, deletePedido
  } from "../controllers/pedidos.controllers";

const router = Router();

router
  .route("/")
  .get(showPedidos)
  .post(createPedido)

  router
  .route("/:id")
  .get(getOnePedido)
  .delete(deletePedido)
  .put(updatePedido);



export default router;