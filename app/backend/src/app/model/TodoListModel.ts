import TodoListDAO from '../../database/todoListDAO';
import { TodoList } from '../../interfaces/TodoList';

class TodoListModel {
  private todoList;
  constructor(){
    this.todoList = new TodoListDAO();
  }

  async getAll(): Promise<TodoList[]> {
    const result = await this.todoList.model.find();
    return result;
  }

  async create(body: TodoList): Promise<TodoList> {
    const result = await this.todoList.model.create({...body});
    return result;
  }
  
}

export default TodoListModel;