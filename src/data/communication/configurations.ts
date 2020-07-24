import CommunicationConfiguration from "../../framework/communication/CommunicationConfiguration";

class TwilioConfiguration implements CommunicationConfiguration {
    readonly accountSID: string;
    readonly authenticationToken: string;
    readonly defaultFrom: string;

    constructor(config) {
        this.accountSID = config.account_sid;
        this.authenticationToken = config.auth_token;
        this.defaultFrom = config.default_from;
    }
}

export default {
    SERVICE_TWILIO: TwilioConfiguration
};