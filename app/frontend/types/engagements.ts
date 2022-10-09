export enum EngagementStatus {
  UNSTARTED = 'UNSTARTED',
  ACTIVE = 'ACTIVE',
  COMPLETE = 'COMPLETE',
}

export interface Engagement {
  id: number;
  name: string;
  status: EngagementStatus;
}
