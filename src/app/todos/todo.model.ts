export class Todo {
  name: string;
  description: string;
  dueDate: string;

  constructor(name: string, description: string, dueDate: string) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
  }
}
