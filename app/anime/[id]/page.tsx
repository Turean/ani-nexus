import animeList from "@/data/anime.json"
import articles from "@/data/articles.json"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const anime = animeList.find((a) => a.id === id)

    if (!anime) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold">Anime not found</h1>
            </div>
        )
    }

    const relatedArticles = articles.filter(
        (article) => article.animeId === anime.id,
    )

    return (
        <main className="py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 mb-12">
                    {/* Poster */}
                    <div className="relative aspect-2/3 w-full max-w-62.5">
                        <Image
                            src={anime.image}
                            alt={anime.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    {/* Info */}
                    <div className="space-y-4">
                        {/* Title */}
                        <h1 className="text-3xl font-bold">{anime.title}</h1>

                        {/* Genres */}
                        <div className="flex flex-wrap gap-2">
                            {anime.genres.map((genre) => (
                                <Badge key={genre} variant="secondary">
                                    {genre}
                                </Badge>
                            ))}
                        </div>

                        {/* Meta Info */}
                        <div className="space-y-1 text-sm text-muted-foreground">
                            <p>
                                <span className="font-medium text-foreground">
                                    Status:
                                </span>{" "}
                                {anime.status}
                            </p>
                            <p>
                                <span className="font-medium text-foreground">
                                    Episodes:
                                </span>{" "}
                                {anime.episodes}
                            </p>
                            <p>
                                <span className="font-medium text-foreground">
                                    Aired:
                                </span>{" "}
                                {anime.aired}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                            {anime.description}
                        </p>
                    </div>
                </div>

                {/* Related Articles */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">
                        Related Articles
                    </h2>

                    {relatedArticles.length === 0 ? (
                        <p className="text-muted-foreground">
                            No articles available for this anime yet.
                        </p>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {relatedArticles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/articles/${article.id}`}>
                                    <Card className="overflow-hidden hover:shadow-lg transition">
                                        {/* Image */}
                                        <div className="relative aspect-video">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <CardHeader>
                                            <p className="text-xs text-muted-foreground">
                                                {article.published}
                                            </p>
                                            <CardTitle className="text-lg">
                                                {article.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {article.content}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
