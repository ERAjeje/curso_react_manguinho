/* eslint-disable @typescript-eslint/quotes */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountModel } from "../models/accountModel"

export type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
