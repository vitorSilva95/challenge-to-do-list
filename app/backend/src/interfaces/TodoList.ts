import { z } from 'zod';

export const TodoListSchema = z.object({
  task: z.string().nonempty({ message: 'Task cannot be empty'}),
  isDone: z.boolean().default(false),
});

export type TodoList = z.infer<typeof TodoListSchema>
