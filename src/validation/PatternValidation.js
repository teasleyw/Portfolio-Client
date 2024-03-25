export const isValidEmail = (email) => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = new RegExp(pattern);
  return regex.test(email);
}
export function isValidName(name) {
  const pattern = /^[A-z]+$/;
  const regex = new RegExp(pattern);
  return regex.test(name);
}
export function isValidUserName(name) {
  const pattern = /^[a-zA-Z\-0-9]+$/;
  const regex = new RegExp(pattern);
  return regex.test(name);
}
export function isValidPhone(phone) {
  const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const regex = new RegExp(pattern);
  return regex.test(phone);
}
export function isValidPoemTitle(phone) {
  const pattern = /^[A-z]+$/;
  const regex = new RegExp(pattern);
  return regex.test(phone);
}


