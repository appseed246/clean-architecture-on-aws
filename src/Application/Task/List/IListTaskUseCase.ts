import ListTaskRequest from "./ListTaskRequest";

export default interface IListTaskUseCase {
  handle(request: ListTaskRequest): Promise<void>;
}
