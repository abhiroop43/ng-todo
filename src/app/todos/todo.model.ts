export class Todo {
  name: string;
  description: string;
  dueDate: string;
  isComplete: boolean;
  createdBy: string;

  constructor(name: string, description: string, dueDate: string, createdBy: string, isComplete?: boolean) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete == null ? false : isComplete;
    this.createdBy = createdBy;
  }
}
