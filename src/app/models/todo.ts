export class Todo {
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ) {}
}
