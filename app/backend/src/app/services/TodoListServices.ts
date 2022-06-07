import { TodoList, TodoListUpdate} from '../../interfaces/TodoList';
import TodoListModel from '../model/TodoListModel';

class TodoListServices {
  constructor(public model = new TodoListModel() ){}
  async getAll() {
    const result = await this.model.getAll();
    return result;
  }
  async create(body:TodoList): Promise<TodoList> {
    const result = await this.model.create(body);
    return result;
  }
  async update(id: string , body:TodoListUpdate): Promise<TodoList> {
    const result = await this.model.update(id , body);
    return result;
  }
  async delete(id: string): Promise<TodoList> {
    const result = await this.model.delete(id);
    return result;
  }
}

export default TodoListServices;