import {ref} from 'vue'

const isLoggedIn = ref(false);

export default function usLogin() {
    return isLoggedIn
}
