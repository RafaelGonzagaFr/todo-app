import { Request, Response } from 'express'
import Task from "../models/Task"


export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao busca tarefas' });
  }
}

export const getTasksByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const tasks = await Task.findAll({
      where: {
        userId: id,
      }
    })
    res.status(200).json(tasks);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao achar tarefas' });
  }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { titulo, descricao, userId } = req.body;
  try {
    const task = await Task.create({ titulo, descricao, userId });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar nova tarefa' });
  }
}

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const task = await Task.findByPk(id);
    task?.update({ titulo: req.body.titulo, descricao: req.body.descricao });
    task?.save();
    res.status(201).json(task)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao modificar usuário' })
  }
}