import type { BasicContent } from "../../types"

interface Prop {
  hero: BasicContent
  biscuit: BasicContent
  work: BasicContent
  cool: BasicContent
}

interface Content {
  heroContent: BasicContent
  biscuitContent: BasicContent
  workContent: BasicContent
  coolContent: BasicContent
}

export const getContent = ({ hero, biscuit, work, cool }: Prop): Content => ({
  heroContent: hero,
  biscuitContent: biscuit,
  workContent: work,
  coolContent: cool,
})
