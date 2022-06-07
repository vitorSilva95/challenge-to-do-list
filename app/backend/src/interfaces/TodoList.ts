import { z } from 'zod';

export const TodoListSchema = z.object({
  task: z.string({
    required_error: 'Task is required',
    invalid_type_error: 'Task must be a string',
  }).nonempty({ message: 'Task cannot be empty'}),
  isDone: z.boolean().default(false),
});

export type TodoList = z.infer<typeof TodoListSchema>;

export type TodoListUpdate = Partial<TodoList>;

