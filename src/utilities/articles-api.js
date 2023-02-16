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

// export function getSaved(id) {
//   return sendRequest(`${BASE_URL}/saved`, 'POST', {id})
// }
          





            // import axios from 'axios';
            
            // const BASE_URL = '/api/articles';
            
            // export async function getAll() {
            //   return await axios.get(BASE_URL).then(res => res.data);
            // }
            
            // export async function getById(id) {
            //   return await axios.get(`${BASE_URL}/${id}`).then(res => res.data);
            // }
            
            // export async function save(id) {
            //   return await axios.post(`${BASE_URL}/saved`).then(res => res.data);
            // }
            
            // export async function remove(id) {
            //   return await axios.delete(`${BASE_URL}/saved/${id}`).then(res => res.data);
            // }
            
            // export async function getSaved() {
            //   return await axios.get(`${BASE_URL}/saved`).then(res => res.data);
            // }