import { useRouter } from 'next/router'

const Anime = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Anime: {id}</p>
}

export default Anime
