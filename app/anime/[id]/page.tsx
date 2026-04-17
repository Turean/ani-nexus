import animeList from "@/data/anime.json"
import articles from "@/data/articles.json"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Anime } from "@/types/global"
import { cn } from "@/lib/utils"

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
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
                {/* Left Column: Poster + Stats */}
                <div className="w-full sm:w-64 shrink-0 flex flex-col gap-4">
                    {/* Poster */}
                    <div className="relative aspect-2/3 overflow-hidden">
                        <Image
                            src={anime.image}
                            alt={anime.title}
                            fill
                            sizes="(min-width: 640px) 256px, 100vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col gap-3 bg-neutral-100 p-5 rounded-2xl">
                        <div className="border-b border-b-black">
                            <h2 className="text-xl text-center font-bold mb-2">
                                Stats
                            </h2>
                        </div>
                        <div>
                            <p className="text-base font-medium">Type</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.type}
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Episodes</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.episodes}
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Aired</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.aired}
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Season</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.season}
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Duration</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.duration}
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Source</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.source}
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Studio</p>
                            <p className="text-sm text-muted-foreground">
                                {anime.studio}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Title + Badges + Synopsis */}
                <div className="flex flex-col gap-6 w-full">
                    <div>
                        <h1 className="text-4xl font-bold mb-3">
                            {anime.title}
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            <Badge
                                className={cn(
                                    "text-sm text-white",
                                    anime.status === "Ongoing"
                                        ? "bg-green-500"
                                        : "bg-neutral-500",
                                )}>
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

                    <div>
                        <h2 className="text-2xl font-bold mb-3">Synopsis</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            {anime.description}
                        </p>
                    </div>
                </div>
            </div>

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
