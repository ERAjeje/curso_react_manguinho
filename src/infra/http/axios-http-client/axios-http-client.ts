/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpPostParams } from '@/data/protocols/http'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    const { url, body } = params
    return await axios.post(url, body)
  }
}
