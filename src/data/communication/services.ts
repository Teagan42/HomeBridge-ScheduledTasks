import {CommunicationService} from "../../framework/communication/CommunicationService";
import {CallHandle, FaxHandle, Handle, TextHandle} from "../../framework/communication/reference/CommunicationHandle";
import {CommunicationState} from "../../framework/communication/reference/CommunicationState";

type StateChangeCallback<HandleType extends Handle> =
    (handle: HandleType, oldState: CommunicationState, newState: CommunicationState) => {}

class TwilioService implements CommunicationService {
    call(
        from: string,
        to: string, message: string,
        onStateChange: StateChangeCallback<CallHandle>
    ): CallHandle {
        return new CallHandle('', CommunicationState.IN_PROGRESS, onStateChange);
    }

    fax(
        from: string,
        to: string,
        message: string,
        onStateChange: StateChangeCallback<FaxHandle>
    ): FaxHandle {
        return new FaxHandle('', CommunicationState.IN_PROGRESS, onStateChange);
    }

    text(
        from: string,
        to: string,
        message: string,
        onStateChange: StateChangeCallback<TextHandle>
    ): TextHandle {
        return new TextHandle('', CommunicationState.IN_PROGRESS, onStateChange);
    }

}

export default {
    TWIL: TwilioService
};