import CallableInstance from "callable-instance";
import {ScheduleConfiguration} from "../../models/scheduleConfiguration";
import {Schedule} from "../../models/schedule";
import {EXECUTE} from "../../../helpers/constants";
import {BuildCronString} from "./BuildCronString";
import {BuildEnabledEntity} from "./entities/BuildEnabledEntity";
import {BuildInformationEntities} from "./entities/BuildInformationEntities";

export class BuildSchedule extends CallableInstance<[ScheduleConfiguration], Schedule> {
    private readonly buildCronString: BuildCronString;
    private readonly buildEnabledEntity: BuildEnabledEntity;
    private readonly buildInformationEntities: BuildInformationEntities;

    constructor(
        buildCronString: BuildCronString,
        buildEnabledEntity: BuildEnabledEntity,
        buildInformationEntities: BuildInformationEntities
    ) {
        super(EXECUTE);
        this.buildCronString = buildCronString;
        this.buildEnabledEntity = buildEnabledEntity;
        this.buildInformationEntities = buildInformationEntities
    }

    execute(configuration: ScheduleConfiguration): Schedule {
        return new Schedule(
            this.buildCronString(configuration),
            configuration,
            this.buildEnabledEntity(configuration),
            this.buildInformationEntities(configuration)
        );
    }
}