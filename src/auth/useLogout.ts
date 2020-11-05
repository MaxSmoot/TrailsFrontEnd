import useAuth from "./useAuth";

export default async function useLogout() {
  const user = useAuth();
  console.log(user.token)
  const logoutData = await fetch(
    "https://theappalachianconnection.nussman.us/v1/auth/logout",
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  const response = await logoutData.json();
  if (response.status == "success") {
    user.token = null;
    user.username = '';
    user.email = '',
    user.firstName = '';
    user.lastName = '';
    user.phone = '';
    user.id = '';
  }

  return response;
}
