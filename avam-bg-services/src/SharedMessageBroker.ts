
export class SharedMessageBroker {

    //#region Static Members
    private static _instance: SharedMessageBroker = new SharedMessageBroker();

    constructor() {
        if (SharedMessageBroker._instance) {
            throw new Error("Error: Instantiation failed: Use SharedMessageBroker.instance instead of new.");
        }
        SharedMessageBroker._instance = this;
    }

    static get instance(): SharedMessageBroker {
        return SharedMessageBroker._instance;
    }
    //#endregion

}