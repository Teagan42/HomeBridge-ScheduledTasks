// import {PhoneNumber} from "../../helpers/validation";


export class CommunicationType {
    static readonly VOICE: CommunicationType = new CommunicationType('VOICE');
    static readonly SMS: CommunicationType = new CommunicationType('SMS');
    static readonly FAX: CommunicationType = new CommunicationType('FAX');
    static readonly NONE: CommunicationType = new CommunicationType("NONE");
    static readonly ALL: Array<CommunicationType> = [
        CommunicationType.VOICE,
        CommunicationType.SMS,
        CommunicationType.FAX
    ];
    protected readonly communicationType: string;

    private constructor(communicationType: string) {
        this.communicationType = communicationType;
    }

    public static validate(communicationType: string): CommunicationType {
        for (const commType of CommunicationType.ALL) {
            if (commType.communicationType.toUpperCase() === communicationType.toUpperCase()) {
                return commType;
            }
        }
        return CommunicationType.NONE;
    };
}

export class Frequency {
    static readonly WEEK = new Frequency('WEEK');
    static readonly DAY = new Frequency('DAY');
    static readonly HOUR = new Frequency('HOUR');
    static readonly NONE = new Frequency('NONE');
    static ALL: Frequency[] = [
        Frequency.DAY,
        Frequency.HOUR,
        Frequency.WEEK
    ];
    protected readonly scale: string;

    private constructor(scale: string) {
        this.scale = scale;
    }

    public static validate(frequency: string): Frequency {
        for (const freq of Frequency.ALL) {
            if (freq.scale.toUpperCase() === frequency.toUpperCase()) {
                return freq;
            }
        }
        return Frequency.NONE;
    };
}

export class DayOfWeek {
    static readonly MONDAY = new DayOfWeek('MONDAY', 1);
    static readonly TUESDAY = new DayOfWeek('TUESDAY', 2);
    static readonly WEDNESDAY = new DayOfWeek('WEDNESDAY', 3);
    static readonly THURSDAY = new DayOfWeek('THURSDAY', 4);
    static readonly FRIDAY = new DayOfWeek('FRIDAY', 5);
    static readonly SATURDAY = new DayOfWeek('SATURDAY', 6);
    static readonly SUNDAY = new DayOfWeek('SUNDAY', 0);
    static readonly ALL: DayOfWeek[] = [
        DayOfWeek.MONDAY,
        DayOfWeek.TUESDAY,
        DayOfWeek.WEDNESDAY,
        DayOfWeek.THURSDAY,
        DayOfWeek.FRIDAY,
        DayOfWeek.SATURDAY,
        DayOfWeek.SUNDAY
    ];
    readonly cronDay: number;
    protected readonly name: string;

    constructor(name: string, cronDay: number) {
        this.name = name;
        this.cronDay = cronDay;
    }

    public static validate(list_of_days: Array<String>): DayOfWeek[] {
        const valid_days: DayOfWeek[] = [];
        for (const confDay of list_of_days) {
            for (const day of DayOfWeek.ALL) {
                if (day.name == confDay) {
                    valid_days.push(day);
                }
            }
        }

        return valid_days.length === list_of_days.length
            ? []
            : valid_days;
    }
}

export class ScheduleConfiguration {
    readonly name: string;
    readonly from: string | null;
    readonly to: string;
    readonly message: string;
    readonly communicationType: CommunicationType;
    readonly hour: number;
    readonly minute: number;
    readonly frequency: Frequency;
    readonly interval: number;
    readonly daysOfWeek: DayOfWeek[];
    readonly processResponse: boolean;
    readonly positiveMatches: string[];

    constructor(
        private readonly config
    ) {
        this.name = config.name;
        this.from = (config.from && config.from.trim().length == 0)
            ? null
            : config.from;
        this.to = config.to;
        this.message = config.message;
        this.communicationType = CommunicationType.validate(config.communicationType);
        this.hour = config.hour;
        this.minute = config.minute;
        this.frequency = Frequency.validate(config.frequency);
        this.interval = config.interval;
        this.daysOfWeek = DayOfWeek.validate(config.daysOfWeek);
        this.processResponse = config.process_response;
        this.positiveMatches = config.positiveMatches;
    }
}
