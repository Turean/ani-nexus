import animeList from "@/data/anime.json"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedAnime() {
    const featured = animeList.slice(0, 4)

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Featured Anime</h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featured.map((anime) => (
                        <Link
                            key={anime.id}
                            href={`/anime/${anime.id}`}
                            className="group">
                            <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="relative aspect-2/3 overflow-hidden">
                                    <Image
                                        src={anime.image}
                                        alt={anime.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                                    <div className="absolute bottom-0 p-4 text-white">
                                        <h3 className="text-lg font-semibold line-clamp-2">
                                            {anime.title}
                                        </h3>
                                    </div>
                                </div>

                                <CardContent className="space-y-3 p-4">
                                    <div className="flex flex-wrap gap-2">
                                        {anime.genres.map((genre) => (
                                            <Badge
                                                key={genre}
                                                variant="secondary">
                                                {genre}
                                            </Badge>
                                        ))}
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        {anime.episodes} Episodes
                                    </p>

                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {anime.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
