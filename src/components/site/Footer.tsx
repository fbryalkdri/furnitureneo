import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-brand-cream mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="font-serif text-2xl">
            Neo<span style={{ color: "oklch(75% 0.15 95)" }}>Furniture</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Furnitur minimalis yang dirancang untuk menghadirkan ketenangan dan kehangatan dalam setiap ruang.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-background border border-border hover:bg-brand-yellow-soft transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-background border border-border hover:bg-brand-yellow-soft transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-background border border-border hover:bg-brand-yellow-soft transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base mb-4">Jelajahi</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/gallery" className="hover:text-foreground transition-colors">Galeri</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Layanan</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">Tentang</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base mb-4">Kunjungi</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Jl. Sudirman No. 24</li>
            <li>Jakarta, Indonesia</li>
            <li>hello@neofurniture.id</li>
            <li>+62 21 5555 0199</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container mx-auto px-6 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} NeoFurniture. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
