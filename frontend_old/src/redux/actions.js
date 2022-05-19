import { CREATE_TELNUMB } from "./types";

export function createTelephone(tel) {
  return {
    type: CREATE_TELNUMB,
    payload: tel
  }
}