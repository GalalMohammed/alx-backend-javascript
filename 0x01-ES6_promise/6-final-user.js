import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((response) => [{ status: response[0].status, value: response[0].status === 'fulfilled' ? response[0].value : response[0].reason }, { status: response[1].status, value: response[1].status === 'fulfilled' ? response[1].value : response[1].reason }]);
}
