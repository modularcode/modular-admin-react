interface Config {
  navigationType: 'hash' | 'history'
  useSampleData?: boolean
  api: {
    useMocks?: boolean
    url: string
  }
}

const config: Config = {
  navigationType: 'hash',
  useSampleData: true,
  api: {
    useMocks: true,
    url: process.env.API_URL || 'http://localhost:4000/api',
  },
}

export default config
