/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationParams } from '../usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.url(),
  password: faker.internet.password()
})
