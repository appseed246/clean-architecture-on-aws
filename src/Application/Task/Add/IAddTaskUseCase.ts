import AddTaskRequest from "./AddTaskRequest";

export default interface IAddTaskUseCase {
  handle(request: AddTaskRequest): Promise<void>;
}
