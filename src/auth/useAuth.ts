import {reactive} from 'vue'

const user = reactive({
    token: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    id: ""
});

export default function useAuth() {
    return user;
}
