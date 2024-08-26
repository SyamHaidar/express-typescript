import cors from 'cors'

const _cors = cors({
  origin: 'http://localhost:3000',
  credentials: true,
})

export default _cors
