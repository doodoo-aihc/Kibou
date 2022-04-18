export default interface Anime {
    id: number
    idMal?: number
    title?: MediaTitle
    format?: MediaFormat
    status?: MediaStatus
    description?: string
    startDate?: FuzzyDate
    endDate?: FuzzyDate
    season?: MediaSeason
    seasonYear?: number
    seasonInt?: number
    episodes?: number
    duration?: number
    source?: MediaSource
    coverImage?: MediaCoverImage
    bannerImage?: string
    genres?: string[]
    synonyms?: string[]
    averageScore?: number
    meanScore?: number
    popularity?: number
    trending?: number
    favourites?: number
    tags?: MediaTag[]
    // TODO: Insert the remaining properties of media
}

type MediaTitle = {
    romaji?: string
    english?: string
    native?: string
    userPreferred?: string
}

type FuzzyDate = {
    year?: number
    month?: number
    day?: number
}

type MediaCoverImage = {
    extraLarge?: string
    large?: string
    medium?: string
    color?: string
}

type MediaTag = {
    id: number
    name: string
    description?: string
    category?: string
    rank?: number
    isGeneralSpoiler?: boolean
    isMediaSpoiler?: boolean
}

enum MediaFormat {
    TV,
    TV_SHORT,
    MOVIE,
    SPECIAL,
    OVA,
    ONA,
    MUSIC,
    MANGA,
    NOVEL,
    ONE_SHORT
}

enum MediaStatus {
    FINISHED,
    RELASING,
    NOT_YET_RELEASED,
    CANCELLED,
    HIATUS
}

enum MediaSeason {
    WINTER, // Months December to February
    SPRING, // Months March to May
    SUMMER, // Months June to August
    FALL // Months September to November
}

enum MediaSource {
    ORIGINAL,
    MANGA,
    LIGHT_NOVEL,
    VISUAL_NOVEL,
    VIDEO_GAME,
    OTHER
}