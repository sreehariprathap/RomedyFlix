export interface CarousalProps {
  title: string
  cardType: string
  styles: string
  genreId: string
}

export interface ProgrammeCardProps {
  programme: Programme
  index?: number
  inViewRef?: any
  inView?: any
  key?: any
}

export interface Programme {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface RoundActionButtonProps {
  icon: string
  styles?: React.CSSProperties | any
  action?: () => void
  hoverText?: string
}

export interface ScrollButtonProps {
  action: () => void
  isPrevious?: boolean
  isLarge?: boolean
}

export interface AppButtonProps {
  styles?: React.CSSProperties | string
  text: string
  link?: any
  action?: () => void
  icon?: any
}
