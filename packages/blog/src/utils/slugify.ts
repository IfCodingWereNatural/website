import { slug as slugger } from 'github-slugger'
import type { SstTutorialFrontmatter } from '@content/_schemas'

export const slugifyStr = (str: string) => slugger(str)

const slugify = (post: SstTutorialFrontmatter) =>
  post.postSlug ? slugger(post.postSlug) : slugger(post.title)

export const slugifyAll = (arr: string[]) => arr.map((str) => slugifyStr(str))

export default slugify