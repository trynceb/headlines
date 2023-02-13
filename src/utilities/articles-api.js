import sendRequest from './send-request';

const BASE_URL = '/api/articles';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/saved/${id}`, 'POST');
}

// export function getSaved() {
//   return sendRequest(`${BASE_URL}/saved`)
// }

// export function save(id) {
//   return sendRequest(`${BASE_URL}/${id}`)
// }
