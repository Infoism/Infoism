import fs from 'fs'
import path from 'path'
import axios from 'axios'
import progress from 'progress-stream'

type downloadConfig = {
  url: string
  dir: string
  fileName?: string
  callback?: (percentage: number) => void
}

export async function downloadFile(config: downloadConfig) {
  const { url, dir, fileName = path.basename(url), callback } = config
  const { data, headers } = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })
  const totalLength = headers['content-length']

  const stream = progress({
    length: totalLength,
    time: 100
  })

  stream.on('progress', (progress) => {
    callback?.(progress.percentage)
  })

  const writer = fs.createWriteStream(path.resolve(dir, fileName))

  return await new Promise<void>((resolve, reject) => {
    data
      .pipe(stream)
      .pipe(writer)
      .on('close', () => {
        resolve()
      })
      .on('error', () => {
        reject()
      })
  })
}
