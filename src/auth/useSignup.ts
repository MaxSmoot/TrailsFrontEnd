import useAuth from "./useAuth";

interface SignupData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default async function useSignup(data: SignupData) {
  let loggedIn = false;
  const loginData = await fetch(
    "https://theappalachianconnection.nussman.us/v1/auth/signup",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const response = await loginData.json();
  if (response.status == "success") {
    const user = useAuth();
    const { token, firstName, lastName, email, phone, username, id } = response;
    user.token = token;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
    user.username = username;
    user.id = id;
    loggedIn = true;
  }

  return loggedIn;
}
