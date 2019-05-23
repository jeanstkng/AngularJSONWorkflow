export interface JSONWorkflows {
    workflow: string;
    url: string;
    phases: Phases;
}

export interface Phases {
    Design: Design;
    Development: Design;
    'Validation-Reg-Launch': ValidationRegLaunch;
}

export interface Design {
    id: number;
    url: string;
    milestones: { [key: string]: Activity };
    activities: { [key: string]: Activity };
    documents: { [key: string]: Activity };
}

export interface Activity {
    name: string;
    url: string;
}

export interface ValidationRegLaunch {
    id: number;
    url: string;
    milestones: { [key: string]: Activity };
    activities: { [key: string]: Activity };
    documents: Documents;
}

export interface Documents {
    '1': Activity;
}
