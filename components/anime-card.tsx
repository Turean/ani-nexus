import Image from "next/image"
import Link from "next/link"

type Anime = {
    id: string
    title: string
    image: string
    episodes: number
    status: string
}

export default function AnimeCard({ anime }: { anime: Anime }) {
    return (
        <Link href={`/anime/${anime.id}`} className="block">
            <div className="group">
                <div className="relative aspect-2/3 overflow-hidden rounded-md">
                    <Image
                        src={anime.image}
                        alt={anime.title}
                        fill
                        sizes="(min-width: 1280px) 16.67vw, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33.33vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="mt-4 space-y-2">
                    <h3 className="text-base font-semibold leading-tight line-clamp-2 group-hover:text-yellow-600">
                        {anime.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        {anime.status} • {anime.episodes} eps
                    </p>
                </div>
            </div>
        </Link>
    )
}
