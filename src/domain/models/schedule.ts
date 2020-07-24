import {ScheduleConfiguration} from "./scheduleConfiguration";
import {InformationEntity, ToggleEntity} from "../../framework/entity";

export class Schedule {
    private cronSchedule: CronString;
    private configuration: ScheduleConfiguration;
    private enabledEntity: ToggleEntity;
    private statusEntities: InformationEntity[] | void;

    constructor(
        cronSchedule: string,
        configuration: ScheduleConfiguration,
        enabledEntity: ToggleEntity,
        statusEntities: InformationEntity[] | void
    ) {
        this.cronSchedule = cronSchedule;
        this.enabledEntity = enabledEntity;
        this.configuration = configuration;
        this.statusEntities = statusEntities;
    }
}