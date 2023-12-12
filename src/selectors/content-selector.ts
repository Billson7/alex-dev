import type { BasicContent } from "../../types"

type Prop = {
  hero: BasicContent
  biscuit: BasicContent
  work: BasicContent
  cool: BasicContent
}

type Content = {
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
