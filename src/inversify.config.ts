import { Container } from "inversify";
import IListTaskPresenter from "./Application/Task/List/IListTaskPresenter";
import { TYPES } from "./Types";
import ListTaskPresenter from "./InterfaceAdapter/Presenter/Task/ListTaskPresenter";
import IListTaskUseCase from "./Application/Task/List/IListTaskUseCase";
import ListTaskUseCase from "./Application/Task/List/ListTaskUseCase";
import ITaskRepository from "./Domain/Task/ITaskRepository";
import TaskRepository from "./InterfaceAdapter/Gateways/Task/TaskRepository";
import LineMessageDispatcher from "./InterfaceAdapter/Dispatcher/LineMessageDispatcher";
import IAddTaskPresenter from "./Application/Task/Add/IAddTaskPresenter";
import IAddTaskUseCase from "./Application/Task/Add/IAddTaskUseCase";
import AddTaskUseCase from "./Application/Task/Add/AddTaskUseCase";
import AddTaskPresenter from "./InterfaceAdapter/Presenter/Task/AddTaskPresenter";

// DI Container Registration
const container = new Container();
container
  .bind<IListTaskPresenter>(TYPES.IListTaskPresenter)
  .to(ListTaskPresenter);
container.bind<IListTaskUseCase>(TYPES.IListTaskUseCase).to(ListTaskUseCase);
container.bind<IAddTaskPresenter>(TYPES.IAddTaskPresenter).to(AddTaskPresenter);
container.bind<IAddTaskUseCase>(TYPES.IAddTaskUseCase).to(AddTaskUseCase);
container.bind<ITaskRepository>(TYPES.ITaskRepository).to(TaskRepository);
container
  .bind<LineMessageDispatcher>(TYPES.LineMessageDispatcher)
  .to(LineMessageDispatcher);

export { container };
