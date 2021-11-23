const required = (propertyType) => (v) => v && v.length > 0 || `${propertyType} field is required`;

const minLength = (propertyType, minLength) => (v) => (v === '' || v && v.length >= minLength) || `${propertyType} must not be less than ${minLength} characters`;

const positive = (name) => (v) => parseInt(v) > 0 || name + ' should be greater than 0'

export {
  required,
  minLength, positive
}
