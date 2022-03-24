export default interface Waifus {
    name: string,
    name_kanji: string,
    nicknames: string[],
    favourites: number,
    about: string,
    images: {
        jpg: {
            image_url: string
        }
    }
}