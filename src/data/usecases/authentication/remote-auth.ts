/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationParams, IAuthentication } from '@/domain/usecases'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'

export default class RemoteAuthentication implements IAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {}
  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK: return httpResponse.body as AccountModel
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError('Invalid credentials')
      default: throw new UnexpectedError('Try again')
    }
  }
}
