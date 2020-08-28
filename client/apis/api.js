const url = "/api/prompts/"

export function getPrompts() {
  return fetch(url).then((response) => {
    return response.json().catch((error) => console.error(error))
  })
}

export function addEntry(prompt, promptId) {
  return fetch(url + promptId, {
    method: "POST",
    body: JSON.stringify(prompt),
    headers: { "Content-type": "application.json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json).catch((error) => console.log(error)))
}
// export function addEntry(entry) {
//   return request
//     .post("/api/prompts/:id")
//     .send(entry)
//     .then((req) => {
//       return req.body
//     })
// }
