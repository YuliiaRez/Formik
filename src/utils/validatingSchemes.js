import * as yup from 'yup';
const NAME_SCHEMA = yup
  .string()
  .matches(/^([A-Z][a-z]{1,18})$/)
  .required();
const PASSWORD_SCHEME = yup
  .string()
  .matches((/^(?=.*[A-Z].*)(?=.*[a-z].*).{8,32}$/), 'The password must contain at least 8 letters with 1 capital letter.')
  .min(8)
  .max(32)
  .required();
const FORM_SCHEMA = yup.object().shape({
  email: yup.string().email().required(),
  password: PASSWORD_SCHEME,
  passwordConfirm: PASSWORD_SCHEME.oneOf([yup.ref('password')], 'Parols are nit equal'),
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displaytName: NAME_SCHEMA,

});
export default FORM_SCHEMA;