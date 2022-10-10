import { Engagement, EngagementStatus } from 'types/engagements';

export const mockEngagement = (attrs: Partial<Engagement> = {}): Engagement => {
  return {
    id: attrs.id ?? 1,
    name: attrs.name ?? 'Foo',
    status: attrs.status ?? EngagementStatus.UNSTARTED,
  };
};
