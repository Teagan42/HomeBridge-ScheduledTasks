import {CallHandle, FaxHandle, TextHandle} from "./reference/CommunicationHandle";
import {CommunicationState} from "./reference/CommunicationState";

export interface CommunicationService {
    call(
        from: string,
        to: string,
        message: string,
        onStateChange: (handle: CallHandle, oldState: CommunicationState, newState: CommunicationState) => {}
    ): CallHandle;

    text(
        from: string,
        to: string,
        message: string,
        onStateChange: (handle: TextHandle, oldState: CommunicationState, newState: CommunicationState) => {}
    ): TextHandle;

    fax(
        from: string,
        to: string,
        message: string,
        onStateChange: (handle: FaxHandle, oldState: CommunicationState, newState: CommunicationState) => {}
    ): FaxHandle;
}