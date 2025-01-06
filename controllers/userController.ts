
import { Request, Response } from 'express'
import User from '../models/User'

export const getUsers = async (req: Request, res: Response): Promise<void>  => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários '});
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuário '});
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { nome, username, password } = req.body;
  try {
    const user = await User.create({ nome, username, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Erro ao criar usuário` });
  }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    user?.update({ nome: req.body.nome , username: req.body.username, password: req.body.password });
    user?.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao modificar usuário '});
  }
}