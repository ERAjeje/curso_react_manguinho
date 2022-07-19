/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'
import { HttpPostClient } from '../../../data/protocols/http/http-post-client'
import { HttpResponse } from '../../../data/protocols/http/http-response'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const { url, body } = params
    const response = await axios.post(url, body)
    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
