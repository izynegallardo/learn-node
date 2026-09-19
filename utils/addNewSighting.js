import path from 'node:path'
import fs from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { getData } from './getData.js'

export async function addNewSighting(newSighting) {
    try {
        const sightings = await getData()
        newSighting.uuid = randomUUID()
        sightings.push(newSighting)

        const pathJSON = path.join('data', 'data.json')

        await fs.writeFile(pathJSON, JSON.stringify(sightings, null, 2), 'utf8')
    } catch (error) {
        throw new Error(error)
    }
}
