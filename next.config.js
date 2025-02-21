export default {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    return {
      ...config,
      experiments: {
        asyncWebAssembly: true,
        layers: true
      }
    }
  }
}
