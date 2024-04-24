import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

let db = 0;

app.get('/', (c) => {
  return c.text(`now count: ${db}`)
})

app.get('/api', (c) => {
  db++;
  return c.text('');
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
