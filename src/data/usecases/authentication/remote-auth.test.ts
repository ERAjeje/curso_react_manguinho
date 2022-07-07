// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostClient } from '../../protocols/http/http-post-client'
import RemoteAuthentication from './remote-auth'

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'http://localhost:3000/auth'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
