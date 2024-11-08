import { Link } from "lucide-react"
import { CategoriesSelection } from "../components/storefront/CategorySeletction"
import { Hero } from "../components/storefront/Hero"
import { Navbar } from "../components/storefront/Navbar"
import { FeaturedProducts } from "../components/storefront/FeaturedProducts"

export default function IndexPage() {
    return (
        <div>
            <Hero />
            <CategoriesSelection />
            <FeaturedProducts />
        </div>
        
    )
}