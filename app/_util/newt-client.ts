// このファイルはNewt特有なので、皆さんのヘッドレスCMS次第で変わるでしょう
import type { Content } from 'newt-client-js'
import process from 'node:process'
import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: 'qin',
  token: process.env.API_KEY as string,
  apiType: 'cdn', // You can specify "cdn" or "api".
})

export interface Post extends Content {
  title: string
  body: string
}
