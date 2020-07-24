import CallableInstance from "callable-instance";
import {ScheduleConfiguration} from "../../../models/scheduleConfiguration";
import {InformationEntity} from "../../../../framework/entity";
import {EXECUTE} from "../../../../helpers/constants";
import {CommunicationState} from "../../../../framework/communication/reference/CommunicationState";

export class BuildInformationEntities extends CallableInstance<[ScheduleConfiguration], InformationEntity[]> {
    constructor() {
        super(EXECUTE)
    }

    execute(config: ScheduleConfiguration): InformationEntity[] {
        const entities: InformationEntity[] = [];
        CommunicationState.ALL.forEach((state: CommunicationState) => {
            entities.push(new InformationEntity(
                config.name.concat(` ${state.asString()}`),
                'UNIQUE_ID',
                void [] // TODO
            ))
        });
        return entities;
    }
}