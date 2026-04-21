import articles from "@/data/articles.json"
import animeList from "@/data/anime.json"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Sort all articles by newest first
const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
)

// Get unique anime that have articles, preserving order from animeList
const animeWithArticles = animeList.filter((anime) =>
    articles.some((article) => article.animeId === anime.id),
)

export default function ArticleListPage() {
    return (
        <main className="py-10">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Articles</h1>
                    <p className="text-lg mt-3">
                        Explore articles, rankings and deep-dives across your
                        favourite anime
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-6 flex-wrap h-auto gap-1">
                        <TabsTrigger value="all">All</TabsTrigger>
                        {animeWithArticles.map((anime) => (
                            <TabsTrigger key={anime.id} value={anime.id}>
                                {anime.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* All Articles Tab */}
                    <TabsContent value="all">
                        <ArticleGrid items={sortedArticles} showBadge />
                    </TabsContent>

                    {/* Per-Anime Tabs */}
                    {animeWithArticles.map((anime) => {
                        const filtered = sortedArticles.filter(
                            (a) => a.animeId === anime.id,
                        )
                        return (
                            <TabsContent key={anime.id} value={anime.id}>
                                <ArticleGrid items={filtered} />
                            </TabsContent>
                        )
                    })}
                </Tabs>
            </div>
        </main>
    )
}

type Article = (typeof articles)[number]

function ArticleGrid({
    items,
    showBadge = false,
}: {
    items: Article[]
    showBadge?: boolean
}) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((article) => {
                const anime = animeList.find((a) => a.id === article.animeId)
                return (
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
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-medium text-foreground/90">
                                        {new Date(
                                            article.published,
                                        ).toLocaleDateString("en-GB", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                    {showBadge && anime && (
                                        <Badge variant="secondary">
                                            {anime.title}
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-base text-foreground/80 leading-relaxed line-clamp-3">
                                    {article.content}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}
