interface Config {
  navigationType: 'hash' | 'history'
  useSampleData?: boolean
  api: {
    baseUrl: string
  }
}

const config: Config = {
  navigationType: 'hash',
  useSampleData: true,
  api: {
    baseUrl: 'http://localhost:4000/api',
  },
}

export default config
