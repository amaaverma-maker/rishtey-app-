import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/jpeg'

export default async function Image() {
  const imageData = await readFile(join(process.cwd(), 'public/og-image.jpg'))
  const base64 = `data:image/jpeg;base64,${imageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <img
          src={base64}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
