import axios from 'axios'
import faker from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockReturnValue(
    Promise.resolve({
      status: faker.random.number,
      data: faker.random.objectElement()
    })
  )
  return mockedAxios
}
