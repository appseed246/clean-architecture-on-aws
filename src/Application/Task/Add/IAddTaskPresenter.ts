export default interface IAddTaskPresenter {
  output(token: string): Promise<void>;
}
