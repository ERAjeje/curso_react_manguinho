/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import faker from 'faker'
import { HttpPostParams } from '@/data/protocols/http'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const makePostParams = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

const mockedAxiosResult = {
  status: faker.random.number,
  data: faker.random.objectElement()
}

mockedAxios.post.mockReturnValue(Promise.resolve(mockedAxiosResult))

describe('AxiosHttpClient', () => {
  it('Should call axios with correct params and verb', async () => {
    const params = makePostParams()
    const sut = makeSut()
    await sut.post(params)
    expect(mockedAxios.post).toHaveBeenCalledWith(params.url, params.body)
  })
  it('Should return the correct statusCode and body', async () => {
    const params = makePostParams()
    const sut = makeSut()
    const httpResponse = await sut.post(params)
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
