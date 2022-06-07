import TodoListDAO from '../../database/todoListDAO';
import { TodoList, TodoListUpdate } from '../../interfaces/TodoList';

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

  async update(id:string , body: TodoListUpdate): Promise<TodoList> {
    const _id = id;
    const result = await this.todoList.model.findOneAndUpdate({ _id }, { ...body }, {new: true});
    return result as any as TodoList;
  }

  async delete(id:string): Promise<TodoList> {
    const _id = id;
    const result = await this.todoList.model.findOneAndDelete({ _id });
    return result as any;
  } 
}

export default TodoListModel;