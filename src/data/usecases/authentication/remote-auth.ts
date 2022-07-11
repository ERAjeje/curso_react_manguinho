/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { AccountModel } from '@/domain/models/accountModel'

export default class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {}
  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK: break
      case HttpStatusCode.unathorized: throw new Error('Invalid credentials')
      default: throw new Error('Try again')
    }
  }
}
