import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu"

export default function NavBar() {
    return (
        <header className="p-3 border-b flex justify-between items-center">
            <h1 className="text-2xl font-bold">Ani Nexus</h1>
            <NavigationMenu>
                <NavigationMenuList className="gap-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-xl font-medium">
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-xl font-medium">
                            <Link href="/anime">Anime</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className="text-xl font-medium">
                            <Link href="/articles">Articles</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <form className="flex gap-2">
                <Input placeholder="Search..." />
                <Button>
                    <Search />
                </Button>
            </form>
        </header>
    )
}
