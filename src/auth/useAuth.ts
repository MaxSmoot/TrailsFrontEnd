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
