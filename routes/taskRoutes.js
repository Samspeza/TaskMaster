const express = require("express");
const { createTask, getTasks } = require("../controllers/taskController");
const protect = require("../middleware/authMiddleware"); // Middleware de proteção de rota
const router = express.Router();

router.route("/").get(protect, getTasks).post(protect, createTask);

module.exports = router;
// Atualizar uma tarefa existente
router.put("/:id", async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar tarefa" });
    }
});
// Deletar uma tarefa existente
router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.json({ message: "Tarefa removida com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover tarefa" });
    }
});
