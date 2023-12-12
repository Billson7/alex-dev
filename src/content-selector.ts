import { content } from "./fixtures/content"
import type { BasicContent } from "../types"

type Content = {
  heroContent: BasicContent
  biscuitContent: BasicContent
  workContent: BasicContent
  coolContent: BasicContent
}
export const getContent = (): Content => ({
  heroContent: content.hero,
  biscuitContent: content.biscuit,
  workContent: content.work,
  coolContent: content.cool,
})