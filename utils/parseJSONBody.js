export async function parseJSONBody(request) {
    let body = ''

    for await (const chunk of request) {
        body += chunk
    }

    try {
        return JSON.parse(body)
    } catch (error) {
        throw new Error(`Invalid JSON format: ${error}`)
    }
}
