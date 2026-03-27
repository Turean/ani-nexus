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
                        <Link key={anime.id} href={`/anime/${anime.id}`}>
                            <Card className="overflow-hidden hover:shadow-lg transition">
                                <div className="relative aspect-2/3">
                                    <Image
                                        src={anime.image}
                                        alt={anime.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">
                                        {anime.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {anime.genres.map((genre) => (
                                            <Badge
                                                key={genre}
                                                className="bg-gray-500 p-2">
                                                {genre}
                                            </Badge>
                                        ))}
                                    </div>

                                    <p className="text-lg line-clamp-3">
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
