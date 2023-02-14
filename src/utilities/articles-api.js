import sendRequest from './send-request';

const BASE_URL = '/api/articles';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function request(id, method = 'GET') {
  const options = { method };
    // const res = await fetch(`/api/articles/${id}`, options);
    return sendRequest(`/api/articles/${id}`)
    // console.log(res)
    // res.ok will be false if the status code set to 4xx in the controller action
    // if (res.ok) return res.json();
    // throw new Error('Bad Request');
  }
  


export function getSaved(id) {
  return sendRequest(`${BASE_URL}/saved`,'POST', {id})
}

export function save(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}
