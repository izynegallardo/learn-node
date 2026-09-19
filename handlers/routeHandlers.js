import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sanitizeInput } from '../utils/sanitizeInput.js'
import { sightingEvents } from '../events/sightingEvents.js'
import { stories } from '../data/stories.js'

export async function handleGet(response) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(response, 200, 'application/json', content)
}

export async function handlePost(request, response) {
    try {
        const parsedBody = await parseJSONBody(request)
        const sanitizedBody = sanitizeInput(parsedBody)
        await addNewSighting(sanitizedBody)
        sightingEvents.emit('sighting-added', sanitizedBody)
        sendResponse(response, 201, 'application/json', JSON.stringify(sanitizedBody))
    } catch (error) {
        sendResponse(response, 400, 'application/json', JSON.stringify({ error: error }))
    }
}

export async function handleNews(response) {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/event-stream')
    response.setHeader('Cache-Control', 'no-cache')
    response.setHeader('Connection', 'keep-alive')

    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * stories.length)

        response.write(
            `data: ${JSON.stringify({
                event: 'news-update',
                story: stories[randomIndex],
            })}\n\n`,
        )
    }, 3000)
}

export function handleNotFound(response) {
    sendResponse(response, 404, 'application/json', 'Route Not Found')
}

export function handleNotAllowed(response) {
    sendResponse(response, 405, 'application/json', 'Method Not Allowed')
}
