import { getUser } from '../services/userDbService.js'
import log from '../utils/logger.js'

export async function read() {
  try {
    return await getUser()
  } catch (error) {
    log.error(error)
  }
}

