import articles from "@/data/articles.json"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function LatestArticles() {
    const latest = articles.slice(0, 6)

    return (
        <section className="py-12 bg-linear-to-b from-background to-muted">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Latest Articles</h2>
                    <Link
                        href="/articles"
                        className="text-lg font-medium hover:underline hover:text-purple-900">
                        View all
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {latest.map((article) => (
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

                                <CardContent className="space-y-4 p-4">
                                    <p className="text-base font-medium text-foreground/90">
                                        Published - {article.published}
                                    </p>
                                    <p className="text-lg text-foreground/90 leading-relaxed line-clamp-3">
                                        {article.content}
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
