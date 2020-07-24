import CallableInstance from "callable-instance";
import {ScheduleConfiguration} from "../../models/scheduleConfiguration";
import {EXECUTE} from "../../../helpers/constants";

export class BuildCronString extends CallableInstance<[ScheduleConfiguration], CronString> {
    constructor() {
        super(EXECUTE);
    }
}