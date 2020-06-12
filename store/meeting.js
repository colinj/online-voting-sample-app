export const state = () => ({
  id: 2482,
  meetingType: 'P',
  loginType: 'membership',
  description: 'Annual General Meeting',
  issuerId: 'ABCD',
  issuerName: 'Amigo Bus Company',
  meetingDate: '12 Oct 2021 10:00:00',
  openingDate: '01 Jun 2019 10:00:00',
  closingDate: '10 Oct 2021 10:00:00',
  openingDateUTC: '2019-06-01T20:00:00Z',
  closingDateUTC: '2021-12-10T20:00:00Z',
  addressLine1: 'Sheraton on the Park',
  addressLine2: 'The Macquarie Room',
  addressLine3: 'Level 5, 161 Elizabeth St',
  city: 'Sydney',
  state: 'NSW',
  postcode: '2000',
  voteUnitDescription: 'share',
  holderDescription: 'shareholder',
  holderTypes: ['M', 'X', 'I', 'C', 'E'],
  resolutions: [
    { id: 1, order: 1, description: '1. Resolution One.', defaultVote: 'B', remuneration: false, xDirect: false },
    { id: 4, order: 4, description: '4. Resolution Four.', defaultVote: 'O', remuneration: false, xDirect: false },
    { id: 2, order: 2, description: '2. Resolution Two.', defaultVote: 'B', remuneration: true, xDirect: false },
    { id: 3, order: 3, description: '3. Resolution Three. This is a really long resolution. See how long this is.', defaultVote: 'O', remuneration: false, xDirect: true },
    { id: 5, order: 5, description: '5. Resolution Five.', defaultVote: 'O', remuneration: false, xDirect: false }
  ],
  remunerationText: '<b>This is an important bit of info.</b> Followed by some other not so important info.',
  votingDirectionsText: 'This is the <b>voting directions</b> that is <em>entered in from SREG</em>.<br/>This is very <b>important</b> stuff',
  appointProxyText: '<p><b>This is an important blurb about this meeting that the investor needs to know.</b></p><p>Followed by some other not so important info.</p>',
  allowAbstainVote: false,
  allowOpenVote: false,
  allowPartialVoting: true,
  customCSS: '_default',
  customHTML: [],
  nom: 'http://www.reportsonline.net.au/',
  ar: 'http://www.reportsonline.net.au/'
})

export const getters = {
  getResolutions (state) {
    return state.resolutions
  }
}
