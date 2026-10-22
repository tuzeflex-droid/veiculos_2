import { Router } from "express";
import { veiculosServices } from "../services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        res.json(veiculos);
    }catch (error) {
    
        console.error (error);
    }
});
veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.create(req.body);
         res.status(201).json(veiculos);
    }catch (error) {
        console.error (error);
    }


veiculosRouter.delete("/", async (req, res) => {
    try{
        const veiculos = await veiculosServices.delete(req.body);
        res.status(201).json(veiculos);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "erro ao deletar o veiculo"})
    }
})


veiculosRouter.put("/:id", async (req, res)=> {
    try{
        const veiculos = await veiculosServices.put(req.params.id, req.body);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "erro ao atualizar o veiculos"})
    }
})
});