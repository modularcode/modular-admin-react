const config = {
  navigationType: 'hash',
  useSampleData: true,
  api: {
    useMocks: true,
    url: process.env.API_URL || '/api',
  },
}
export default config
