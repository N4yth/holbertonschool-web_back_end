import uploadPhoto from './5-photo-reject.js';
import signUpUser from "./4-user-promise.js";

export default async function handleProfileSignup(firstName, lastName, fileName) {
  await Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
  .then(results => {return results});
}
