import CallableInstance from "callable-instance";
import {EXECUTE} from "../../../../helpers/constants";
import {ScheduleConfiguration} from "../../../models/scheduleConfiguration";
import {ToggleEntity} from "../../../../framework/entity";

export class BuildEnabledEntity extends CallableInstance<[ScheduleConfiguration], ToggleEntity> {
    constructor() {
        super(EXECUTE);
    }

    execute(config: ScheduleConfiguration): ToggleEntity {
        return new ToggleEntity(
            config.name.concat(" enabled"),
            'UNIQUE ID',
            void [] // TODO
        )
    }
}