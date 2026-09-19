export function sendResponse(response, statusCode, contentType, payload) {
    response.statusCode = statusCode
    response.setHeader('Content-Type', contentType)
    response.end(payload)
}
