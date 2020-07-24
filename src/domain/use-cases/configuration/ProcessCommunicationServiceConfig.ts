import CallableInstance from "callable-instance";
import configurations from "../../../data/communication/configurations";
import CommunicationConfiguration from "../../../framework/communication/CommunicationConfiguration";
import {EXECUTE} from "../../../helpers/constants";

export class ProcessCommunicationServiceConfig extends CallableInstance<[string, any], CommunicationConfiguration> {
    constructor() {
        super(EXECUTE);
    }

    execute(service: string, config): CommunicationConfiguration {
        return new configurations[service.toUpperCase()](config);
    }
}
