// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostClientSpy } from '../../test/mock-http-client'
import RemoteAuthentication from './remote-auth'

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', async () => {
    const url = 'http://localhost:3000/auth'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
