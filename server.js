import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import {
    handleGet,
    handlePost,
    handleNews,
    handleNotFound,
    handleNotAllowed,
} from './handlers/routeHandlers.js'

const PORT = 3000

const __dirname = import.meta.dirname

const server = http.createServer(async (request, response) => {
    if (request.url === '/api') {
        if (request.method === 'GET') {
            return await handleGet(response)
        } else if (request.method === 'POST') {
            handlePost(request, response)
        } else {
            handleNotAllowed(response)
        }
    } else if (request.url === '/api/news') {
        return await handleNews(response)
    } else if (!request.url.startsWith('/api')) {
        return await serveStatic(request, response, __dirname)
    } else {
        return handleNotFound(response)
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
