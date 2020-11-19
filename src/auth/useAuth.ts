import { reactive } from "vue";

const user = reactive({
  token: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  username: "",
  id: "",
});

export default function useAuth() {
  return user;
}

export function clearUser() {
  user.token = '';
  user.firstName = '';
  user.email = '';
  user.phone = '';
  user.username = '';
  user.id = '';
}

// export function storeToken() {
  
// }
