export default defineEventHandler(async (event) => {
  return {
    message: 'ok',
    uptime: Math.floor(process.uptime()),
  }
})
