export class Todo {
  name: string;
  description: string;
  dueDate: string;
  isComplete: boolean;

  constructor(name: string, description: string, dueDate: string, isComplete?: boolean) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete == null ? false : isComplete;
  }
}
