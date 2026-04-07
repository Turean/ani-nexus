import animeList from "@/data/anime.json"
import AnimeCard from "@/components/anime-card"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function AnimeBrowsePage() {
    return (
        <main className="py-10">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">
                        Discover your new favourite anime
                    </h1>
                    <p className="text-lg mt-3">
                        Find your favourites and explore new seasonal anime
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
                        <div className="space-y-12">
                            {/* Winter 2025 */}
                            <section>
                                <div className="mb-4">
                                    <h2 className="text-2xl font-semibold">
                                        Winter 2025
                                    </h2>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-6">
                                    {animeList.slice(0, 6).map((anime) => (
                                        <AnimeCard
                                            key={anime.id}
                                            anime={anime}
                                        />
                                    ))}
                                </div>

                                <div>
                                    <Button>See All Anime</Button>
                                </div>
                            </section>

                            {/* Fall 2025 */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">
                                        Fall 2025
                                    </h2>

                                    <span className="text-sm text-primary hover:underline cursor-pointer">
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
                            </section>

                            {/* Spring 2025 */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">
                                        Spring 2025
                                    </h2>

                                    <span className="text-sm text-primary hover:underline cursor-pointer">
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
                            </section>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
