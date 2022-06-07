import TodoListServices from '../services/TodoListServices';
import { TodoList } from '../../interfaces/TodoList';

class TodoListController {
  constructor(
    private service = new TodoListServices(),
  ) {}

  async getAll() {
    const result = await this.service.getAll();
    return result;
  }

  async create(body:TodoList) {
    const result = await this.service.create(body);
    return result;
  }

  async update(id: string, body:TodoList) {
    const result = await this.service.update(id, body);
    return result;
  }
  async delete(id: string) {
    const result = await this.service.delete(id);
    return result;
  } 

}

export default TodoListController;