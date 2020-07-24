import CallableInstance from "callable-instance";
import {ScheduleConfiguration} from "../../models/scheduleConfiguration";
import {EXECUTE} from "../../../helpers/constants";

export class ProcessScheduleConfiguration extends CallableInstance<[object[]], ScheduleConfiguration[]> {

    constructor() {
        super(EXECUTE);
    }

    execute(scheduleConfigs: object[]): ScheduleConfiguration[] {
        return scheduleConfigs
            .map((config) => new ScheduleConfiguration(config));
    }
}
