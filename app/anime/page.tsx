import animeList from "@/data/anime.json"
import AnimeCard from "@/components/anime-card"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function AnimeBrowsePage() {
    return (
        <main className="py-10">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Anime</h1>
                    <p className="text-muted-foreground mt-2">
                        Browse all anime in the database
                    </p>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-6">
                        <TabsTrigger value="all">View All</TabsTrigger>
                        <TabsTrigger value="season">
                            Browse by Season
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            {animeList.map((anime) => (
                                <AnimeCard key={anime.id} anime={anime} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Browse by Season Tab (placeholder) */}
                    <TabsContent value="season">
                        <div className="space-y-10">
                            {/* Example Season Section */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">
                                        Winter 2025
                                    </h2>
                                    <span className="text-sm text-muted-foreground">
                                        See all →
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {animeList.slice(0, 6).map((anime) => (
                                        <AnimeCard
                                            key={anime.id}
                                            anime={anime}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
