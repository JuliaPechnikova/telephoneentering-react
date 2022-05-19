import { CREATE_TELNUMB, FETCH_NUMBERS, REQUEST_POSTS, REQUEST_NUMBERS } from "./types";
import phoneApi from '../utils/PhoneApi';

export function createNumber(phoneNumber) {
  return {
    type: CREATE_TELNUMB,
    payload: phoneNumber
  }
}

export function fetchNumbers() {
  return {
    type: REQUEST_NUMBERS
  }
}