import sendRequest from './send-request';

const BASE_URL = '/api/articles';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function request(id, method = 'GET') {
    return sendRequest(`/api/articles/${id}`)
}

export function getSaved(id) {
  return sendRequest(`${BASE_URL}/saved`,'POST', {id})
}

export function save(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

export function remove(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {id})
}

// export async function getSaved(article) {
//   const res = await fetch(`${BASE_URL}/save`, {
//     method: 'POST',
//     headers: {
//       'Constent-Type': 'application/json',
//     },
//     body: JSON.stringify(article),
//   })
//   const savedArticle = await res.json()

//   const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || []
//   localStorage.setItem('savedArticles', JSON.stringify([...savedArticles, savedArticle]))
// }