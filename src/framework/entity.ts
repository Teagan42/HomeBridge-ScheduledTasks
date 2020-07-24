type Attribute = [string, any];

export class Entity {
    readonly name: string;
    readonly entityId: string;
    readonly attributes: {} = {};

    constructor(name: string, entityId: string, ...attributes: Attribute[] | void[]) {
        this.name = name;
        this.entityId = entityId;
        this.attributes = {};
        attributes?.forEach((attribute) => {
            this.attributes[attribute[0]] = attribute[1];
        });
    }
}

export class ToggleEntity extends Entity {
    constructor(name: string, entityId: string, ...attributes: Attribute[] | void[]) {
        super(name, entityId, ...attributes);
    }
}

export class InformationEntity extends Entity {
    constructor(name: string, entityId: string, ...attributes: Attribute[] | void[]) {
        super(name, entityId, ...attributes);
    }
}