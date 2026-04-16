import animeList from "@/data/anime.json"
import articles from "@/data/articles.json"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Anime } from "@/types/global"

export default async function AnimeDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const anime = animeList.find((a) => a.id === id) as Anime

    if (!anime) notFound()

    const relatedArticles = articles.filter((a) => a.animeId === anime.id)

    return (
        <main className="container mx-auto px-4 py-10">
            {/* Top Section: Poster + Info */}
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
                {/* Poster */}
                <div className="relative aspect-2/3 w-full sm:w-56 shrink-0 rounded-xl overflow-hidden">
                    <Image
                        src={anime.image}
                        alt={anime.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-4xl font-bold mb-3">
                            {anime.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                className={`text-sm ${
                                    anime.status === "Ongoing"
                                        ? "bg-green-600 text-white"
                                        : "bg-neutral-600 text-white"
                                }`}>
                                {anime.status}
                            </Badge>
                            {anime.genres.map((genre) => (
                                <Badge
                                    key={genre}
                                    className="text-sm text-foreground bg-gray-300">
                                    {genre}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Type
                            </p>
                            <p className="font-medium">{anime.type}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Episodes
                            </p>
                            <p className="font-medium">{anime.episodes}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Aired
                            </p>
                            <p className="font-medium">{anime.aired}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Season
                            </p>
                            <p className="font-medium">{anime.season}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Duration
                            </p>
                            <p className="font-medium">{anime.duration}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Source
                            </p>
                            <p className="font-medium">{anime.source}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Studio
                            </p>
                            <p className="font-medium">{anime.studio}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Synopsis */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
                    {anime.description}
                </p>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold mb-6">
                        Related Articles
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/articles/${article.id}`}
                                className="group">
                                <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                                        <div className="absolute bottom-0 p-4 text-white">
                                            <h3 className="text-lg font-bold line-clamp-2">
                                                {article.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <CardContent className="space-y-3 p-4">
                                        <p className="text-sm font-medium text-foreground/70">
                                            Published — {article.published}
                                        </p>
                                        <p className="text-base text-foreground/80 leading-relaxed line-clamp-3">
                                            {article.content}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}
