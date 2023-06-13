import { Spinner } from "../components/Spinner/Spinner"
import storage from "../utils/storage"

async function handleUserResponse(data: any) {
  const { jwt, user } = data
  storage.setToken(jwt)
  return user
}

async function loadUser() {
  if (storage.getToken()) {
    const data = { user: true }
    return data
  }
  return null
}

// async function loginFn(data: any) {
//   const response = await loginWithEmailAndPassword(data);
//   const user = await handleUserResponse(response);
//   return user;
// }

// async function registerFn(data: any) {
//   const response = await registerWithEmailAndPassword(data);
//   const user = await handleUserResponse(response);
//   return user;
// }

async function logoutFn() {
  storage.clearToken()
  window.location.assign(window.location.origin as unknown as string)
}

const authConfig = {
  loadUser,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    )
  },
}
