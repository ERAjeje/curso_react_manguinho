/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { mockAxios } from '@/infra/test/mock-axios'
import { makePostParams } from '@/data/test'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  it('Should call axios with correct params and verb', async () => {
    const params = makePostParams()
    const { sut, mockedAxios } = makeSut()
    await sut.post(params)
    expect(mockedAxios.post).toHaveBeenCalledWith(params.url, params.body)
  })
  it('Should return the correct statusCode and body', () => {
    const params = makePostParams()
    const { sut, mockedAxios } = makeSut()
    const httpResponse = sut.post(params)
    expect(httpResponse).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
