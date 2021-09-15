export function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(
      resolve({
        id: '456',
        firstname: '',
        lastname: '',
        todos: [],
      }),
      1000
    )

    //Reject if error
  })
}
