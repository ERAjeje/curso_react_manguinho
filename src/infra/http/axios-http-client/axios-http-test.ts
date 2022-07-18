import axios from 'axios'
import faker from 'faker'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  it('Should call axios with correct URL', async () => {
    const httpUrl = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({ url: httpUrl, body: {} })
    expect(mockedAxios).toHaveBeenCalledWith(httpUrl, {})
  })
})
