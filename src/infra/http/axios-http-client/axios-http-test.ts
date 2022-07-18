/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'
import faker from 'faker'
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

describe('AxiosHttpClient', () => {
  it('Should call axios with correct params and verb', async () => {
    const params = makePostParams()
    const sut = makeSut()
    await sut.post(params)
    expect(mockedAxios.post).toHaveBeenCalledWith(params.url, params.body)
  })
})
