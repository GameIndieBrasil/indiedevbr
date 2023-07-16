import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { BackgroundType } from "../enums/backgroundType"

interface StringObject {
  text: string
  color?: string
  font?: string
  hidden?: boolean
  url?: string
}

interface IconObject {
  name: IconDefinition
  color?: string
}

interface ImageObject {
  url: string
  alt: string
}

export interface LinkListItem extends Partial<CardsStyle> {
  icon: IconObject
  info: StringObject
  id: string
  videoUrl?: string
  type?: string
  dontOpenNewTab?: boolean
}

export interface SocialListItem {
  link: StringObject
  icon: IconObject
  alt: string
}

interface StylizedItem {
  backgroundType: BackgroundType
  backgroundContent: string
}

interface CardsStyle extends Partial<StylizedItem> {
  borderRadius?: number
  color?: string
}

export interface StudioStyle extends StylizedItem {
  favicon?: ImageObject
}

export interface HeaderInfo {
  title: StringObject
  subtitle?: StringObject
  image?: ImageObject
}

export interface Studio { 
  header: HeaderInfo
  card?: CardsStyle
  style?: StudioStyle
  verified?: IconObject,
  linkList: LinkListItem[]
  socialIconList: SocialListItem[]
}
