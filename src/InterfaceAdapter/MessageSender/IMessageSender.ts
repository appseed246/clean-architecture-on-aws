export default interface IMessageSender {
  reply(token: string, text: string): Promise<void>;
}
