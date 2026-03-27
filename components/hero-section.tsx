import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="w-full py-15 bg-linear-to-b from-background to-muted">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                    Discover the World of Anime
                </h1>

                {/* Subtitle */}
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 max-w-2xl mx-auto">
                    Explore popular anime series, read detailed articles and
                    dive into the stories behind your favorite characters.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                    <Button className="text-lg py-6 px-4" asChild>
                        <Link href="/anime">Browse Anime</Link>
                    </Button>

                    <Button className="text-lg py-6 px-4" asChild>
                        <Link href="/articles">Latest Articles</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
