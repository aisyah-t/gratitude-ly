import request from "superagent"

export function getPrompts() {
  return fetch("/api/prompts").then((res) => {
    return res.json()
  })
}

// export function addEntry(entry) {
//   return request
//     .post("/api/prompts/:id")
//     .send(entry)
//     .then((req) => {
//       return req.body
//     })
// }
