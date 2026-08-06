import { get, put } from '@vercel/blob'

const BLOB_PATH = 'confirmaciones.json'
const dniToRemove = process.argv[2]
const token = process.env.BLOB_READ_WRITE_TOKEN

if (!dniToRemove) {
  console.error('Uso: node --env-file=.env.local scripts/remove-confirmacion.mjs <DNI>')
  process.exit(1)
}

if (!token) {
  console.error('Falta BLOB_READ_WRITE_TOKEN. Corre: vercel env pull .env.local --environment=production')
  process.exit(1)
}

const result = await get(BLOB_PATH, { access: 'private', token })

if (!result) {
  console.log('Todavia no hay confirmaciones guardadas.')
  process.exit(0)
}

const text = await new Response(result.stream).text()
const list = JSON.parse(text)
const filtered = list.filter((entry) => entry.dni !== dniToRemove)

if (filtered.length === list.length) {
  console.log(`No se encontro ninguna confirmacion con DNI ${dniToRemove}.`)
  process.exit(0)
}

await put(BLOB_PATH, JSON.stringify(filtered, null, 2), {
  access: 'private',
  contentType: 'application/json',
  addRandomSuffix: false,
  allowOverwrite: true,
  token,
})

console.log(`Eliminada(s) ${list.length - filtered.length} confirmacion(es) con DNI ${dniToRemove}.`)
