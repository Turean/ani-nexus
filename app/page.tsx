import FeaturedAnime from "@/components/featured-anime"
import HeroSection from "../components/hero-section"
import LatestArticles from "@/components/latest-articles"

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturedAnime />
            <LatestArticles />
        </main>
    )
}
