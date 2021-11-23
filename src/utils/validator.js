const required = (propertyType) => (v) => v && v.length > 0 || `${propertyType} field is required`;

const minLength = (propertyType, minLength) => (v) => (v === '' || v && v.length >= minLength) || `${propertyType} must not be less than ${minLength} characters`;

const emailFormat = () => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (v) => v && regex.test(v) || 'Must be a valid email';
};

const confirmPassword = (propertyType, password) => (v) => v && v === password || `${propertyType} must be same as entered password`;

const positive = (name) => (v) => parseInt(v) > 0 || name + ' should be greater than 0'

export {
  required,
  minLength,
  positive,
  emailFormat,
  confirmPassword
}
