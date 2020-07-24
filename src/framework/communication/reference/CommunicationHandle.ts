import {CommunicationState} from "./CommunicationState";

export abstract class Handle {
    readonly id: string;
    private readonly onStateChange: (handle: Handle, oldState: CommunicationState, newState: CommunicationState) => {};
    private state: CommunicationState;

    constructor(
        id: string,
        initialState: CommunicationState,
        onStateChange: (handle: Handle, oldState: CommunicationState, newState: CommunicationState) => {}) {
        this.id = id;
        this.state = initialState;
        this.onStateChange = onStateChange;
    }

    setState(newState: CommunicationState) {
        const oldState = this.state;
        this.state = newState;
        this.onStateChange(this, oldState, newState);
    }
}

export class CallHandle extends Handle {

}

export class TextHandle extends Handle {

}

export class FaxHandle extends Handle {

}
