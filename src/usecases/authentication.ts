import { HTTP } from "../axiosSetting";

export async function login(user: { email: string; password: string }) {
  try {
    const res = await HTTP.post("/users/login", user);
    localStorage.setItem("token", res.data.token);
    return { user: res.data.user };
  } catch (error) {
    throw error;
  }
}

export function logout() {
  localStorage.removeItem("token");
}

export async function signup(user: {
  email: string;
  password: string;
  name: string;
}) {
  try {
    const res = await HTTP.post("/users/signup", user);
    localStorage.setItem("token", res.data.token);
    return { user: res.data.user };
  } catch (error) {
    throw error;
  }
}
