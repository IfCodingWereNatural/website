import { ApiHandler } from 'sst/node/api'
import { Time } from '@sst-tutorial/core/time'

export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      hello: 'world',
    }),
  }
})
