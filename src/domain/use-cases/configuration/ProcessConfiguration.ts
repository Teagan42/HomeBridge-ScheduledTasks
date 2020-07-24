import CallableInstance from "callable-instance";

import CommunicationConfiguration from "../../../framework/communication/CommunicationConfiguration";
import {ScheduleConfiguration} from "../../models/scheduleConfiguration";
import {ProcessCommunicationServiceConfig} from "./ProcessCommunicationServiceConfig";
import {ProcessScheduleConfiguration} from "./ProcessScheduleConfiguration";
import {EXECUTE} from "../../../helpers/constants";

export class ProcessConfiguration extends CallableInstance<any, [CommunicationConfiguration, ScheduleConfiguration[]]> {
    private readonly processCommunicationServiceConfig: ProcessCommunicationServiceConfig;
    private readonly processScheduleConfiguration: ProcessScheduleConfiguration;

    constructor(processCommunicationServiceConfig: ProcessCommunicationServiceConfig,
                processScheduleConfiguration: ProcessScheduleConfiguration) {
        super(EXECUTE);
        this.processCommunicationServiceConfig = processCommunicationServiceConfig;
        this.processScheduleConfiguration = processScheduleConfiguration;
    }

    execute(config) {
        return [
            this.processCommunicationServiceConfig(
                config.communication_service.service,
                config.communication_service.configuration
            ),
            config.schedules.map((schedule) => this.processScheduleConfiguration(schedule))
        ];
    }
}
