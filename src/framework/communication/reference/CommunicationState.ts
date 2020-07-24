export class CommunicationState {
    static readonly IN_QUEUE = new CommunicationState('IN QUEUE');
    static readonly IN_PROGRESS = new CommunicationState('IN PROGRESS');
    static readonly COMPLETED = new CommunicationState('COMPLETED');
    static readonly FAILED = new CommunicationState('FAILED');
    static readonly ALL: CommunicationState[] = [
        CommunicationState.IN_QUEUE,
        CommunicationState.IN_PROGRESS,
        CommunicationState.COMPLETED,
        CommunicationState.FAILED
    ];

    private readonly stateString: string;

    constructor(stateString: string) {
        this.stateString = stateString;
    }

    asString() {
        return this.stateString;
    }
}