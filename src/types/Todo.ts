import { User } from './User';

export interface Todo{
  id: number,
  title: string,
  completed: boolean,
  userId: number,
}

export interface FullTodo extends Todo{
  user: User | null,
}