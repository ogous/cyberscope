import { fetch as undiciFetch } from 'undici'
import { AppError } from '#lib/error-handler/index.js'
export default async function fetch(url) {
  const res = await undiciFetch(url)
  if (!res.ok)
    throw new AppError('undici-fetch-not-ok', res.url, res.statusText)
  return await res.json()
}
