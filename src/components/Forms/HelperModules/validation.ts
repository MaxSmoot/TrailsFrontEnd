import * as InputValidation from "./input-validation.json";
export function validate(type: string, string: string) {
  switch (type) {
    case "email":
      return new RegExp(InputValidation.emailPattern).test(string);
    case "username":
      return new RegExp(InputValidation.usernamePattern).test(string);
    case "password":
      return new RegExp(InputValidation.passwordPattern).test(string);
    case "name":
      return new RegExp(InputValidation.firstNamePattern).test(string);
  }
}
