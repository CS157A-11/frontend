import { HTTP } from "../axiosSetting";

export async function getIncompleteHabitsForNegativeMoods() {
  try {
    const res = await HTTP.get("/reports/incompletehabitsfornegativemoods");

    return res.data;
  } catch (error) {
    throw error;
  }
}
