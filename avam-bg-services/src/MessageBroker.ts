

export class MessageBroker {
    //#region Static Members
    private static _instance: MessageBroker = new MessageBroker();

    constructor() {
        if (MessageBroker._instance) {
            throw new Error("Error: Instantiation failed: Use MessageBroker.instance instead of new.");
        }
        MessageBroker._instance = this;
    }

    static get instance(): MessageBroker {
        return MessageBroker._instance;
    }
    //#endregion
}