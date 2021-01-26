import Request from '../lib/request'

export const sendMail = async (data) => {
  try {
    return await Request.
      post('/api/email', { data }).
      then((res) => res)

  } catch (err) {
    console.error(err)
  }
}
