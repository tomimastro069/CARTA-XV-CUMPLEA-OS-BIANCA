import type { VercelRequest, VercelResponse } from '@vercel/node'
import { put, list } from '@vercel/blob'

const BLOB_PATH = 'confirmaciones.json'

async function readList(): Promise<unknown[]> {
  try {
    const { blobs } = await list({ prefix: BLOB_PATH })
    const found = blobs.find((b) => b.pathname === BLOB_PATH)
    if (!found) return []
    const res = await fetch(found.url, { cache: 'no-store' })
    if (!res.ok) return []
    const text = await res.text()
    if (!text.trim()) return []
    const parsed = JSON.parse(text)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const lista = await readList()
    res.status(200).json(lista)
    return
  }

  if (req.method === 'POST') {
    try {
      const entry = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      const lista = await readList()
      lista.push(entry)
      await put(BLOB_PATH, JSON.stringify(lista, null, 2), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
      })
      res.status(201).json({ ok: true })
    } catch (err) {
      res.status(400).json({ ok: false, error: 'invalid body', debug: err instanceof Error ? err.message : String(err) })
    }
    return
  }

  res.status(405).send('Method not allowed')
}
