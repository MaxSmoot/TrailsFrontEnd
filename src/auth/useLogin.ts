import useAuth from "./useAuth";

export default async function useLogin(email: string, password: string) {

  const loginData = await fetch(
    "https://theappalachianconnection.nussman.us/v1/auth/login",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  const status = loginData.status;
  const response = await loginData.json();
  console.log(response);
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
  }

  return status;
}
