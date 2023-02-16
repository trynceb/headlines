import sendRequest from './send-request';
const BASE_URL = '/api/articles';

export async function request(id, method = 'GET') {
  return sendRequest(`/api/articles/${id}`)
}

export function getAll() {
      return sendRequest(BASE_URL);
  }
  
  export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }
  
  export function save(id) {
    return sendRequest(`${BASE_URL}/saved`, 'POST', {id})
  }
  
  export function remove(id) {
    console.log("%cBefore sendRequest!", "color: purple")
    return sendRequest(`${BASE_URL}/saved/${id}`, 'DELETE', {id})
  }