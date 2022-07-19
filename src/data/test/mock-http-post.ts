/* eslint-disable @typescript-eslint/no-unused-vars */
import faker from 'faker'
import { HttpPostParams } from '../protocols/http'

export const makePostParams = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
