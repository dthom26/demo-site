import { organization } from './organization';

export const missionStats = [
  {
    value: '1 in 3',
    label: 'Veterans diagnosed with PTSD',
    context: 'Yet less than 40% seek help',
  },
  {
    value: '22',
    label: 'Veteran suicides per day',
    context: 'Classified as a National Health Crisis by the VA & CDC',
  },
  {
    value: '85%+',
    label: 'Of funding goes to therapy programs',
    context: 'For veterans and first responders',
  },
  {
    value: '$275K+',
    label: 'Donated to Operation Surf',
    context: 'Week-long surfing healing experiences',
  },
];

// Short trust signals used by DonationCTA.
// Tax ID is derived from organization so it stays in sync.
export const donationImpacts = [
  '100% of donations fund programs directly',
  'Support veterans, first responders & youth',
  `Verified 501(c)(3) nonprofit — Tax ID: ${organization.taxId}`,
];
