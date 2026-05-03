import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sofa, Truck, Sparkles, Shield, Quote } from "lucide-react";
import heroLiving from "@/assets/hero-living.jpg";
import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";
import productArmchair from "@/assets/product-armchair.jpg";
import productShelf from "@/assets/product-shelf.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeoFurniture — Furnitur Minimalis untuk Rumah Tenang" },
      { name: "description", content: "Jelajahi koleksi furnitur minimalis NeoFurniture. Desain bersih, material premium, dan kenyamanan abadi untuk rumah modern Anda." },
      { property: "og:title", content: "NeoFurniture — Furnitur Minimalis" },
      { property: "og:description", content: "Koleksi furnitur minimalis premium." },
      { property: "og:image", content: heroLiving },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Sparkles, title: "Desain Minimalis", desc: "Setiap potongan dirancang dengan estetika bersih dan tenang." },
  { icon: Shield, title: "Kualitas Premium", desc: "Material pilihan dengan ketahanan bertahun-tahun." },
  { icon: Truck, title: "Pengiriman Aman", desc: "Pengiriman ke seluruh Indonesia dengan asuransi penuh." },
  { icon: Sofa, title: "Garansi 5 Tahun", desc: "Jaminan kualitas konstruksi pada seluruh furnitur kami." },
];

const products = [
  { img: productChair, name: "Kursi Aura", price: "Rp 4.800.000", aspect: "aspect-[3/4]" },
  { img: productTable, name: "Meja Linea Oak", price: "Rp 12.500.000", aspect: "aspect-square" },
  { img: productArmchair, name: "Armchair Boucle", price: "Rp 6.200.000", aspect: "aspect-square" },
  { img: productShelf, name: "Rak Vista", price: "Rp 8.900.000", aspect: "aspect-[3/4]" },
];

const testimonials = [
  { name: "Sarah W.", role: "Jakarta", text: "Kualitas dan desainnya melampaui ekspektasi saya. Setiap tamu yang datang selalu memuji ruang tamu saya." },
  { name: "Andi P.", role: "Bandung", text: "Pelayanan dari tim NeoFurniture sangat profesional. Pengiriman tepat waktu dan furnitur dirakit dengan sempurna." },
  { name: "Maya L.", role: "Surabaya", text: "Furnitur yang abadi. Desainnya minimalis tetapi penuh karakter. Investasi yang sangat layak." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow-soft px-4 py-1.5 text-xs tracking-wider uppercase text-foreground/70">
                Koleksi Baru 2026
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                Dirancang untuk Ketenangan.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                Temukan furnitur yang menyatu dengan ruang Anda — menghadirkan rasa percaya diri yang tenang dan keindahan yang abadi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background hover:bg-foreground/90 transition-all hover:gap-3"
                >
                  Jelajahi Koleksi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm hover:bg-foreground/5 transition-colors"
                >
                  Cerita Kami
                </Link>
              </div>

              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="font-serif text-3xl">10+</div>
                  <div className="text-xs text-muted-foreground mt-1">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="font-serif text-3xl">5K+</div>
                  <div className="text-xs text-muted-foreground mt-1">Pelanggan Puas</div>
                </div>
                <div>
                  <div className="font-serif text-3xl">200+</div>
                  <div className="text-xs text-muted-foreground mt-1">Desain Eksklusif</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-8 bg-brand-yellow/40 rounded-full blur-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroLiving}
                  alt="Ruang tamu minimalis NeoFurniture"
                  width={1280}
                  height={1280}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl p-5 max-w-[200px] hidden md:block">
                <div className="text-xs text-muted-foreground">Best Seller</div>
                <div className="font-serif text-lg mt-1">Sofa Sereno</div>
                <div className="text-sm mt-1">Rp 18.900.000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Mengapa NeoFurniture</span>
            <h2 className="text-4xl md:text-5xl mt-4">Dibuat dengan Filosofi</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow border border-border/50">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow-soft mb-5">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Pilihan Terbaik</span>
              <h2 className="text-4xl md:text-5xl mt-3">Furnitur Unggulan</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all">
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-2xl bg-brand-yellow-soft ${p.aspect} mb-4`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-yellow-soft py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Testimoni</span>
            <h2 className="text-4xl md:text-5xl mt-4">Cerita dari Pelanggan</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background rounded-2xl p-8 border border-border/50">
                <Quote className="h-8 w-8 text-foreground/20 mb-4" />
                <p className="text-foreground/80 leading-relaxed">{t.text}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-foreground text-background p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl text-background">Siap menata ulang rumah Anda?</h2>
            <p className="mt-4 text-background/70 max-w-xl mx-auto">
              Konsultasi gratis dengan tim desain interior kami untuk menemukan furnitur yang tepat.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm text-foreground hover:bg-brand-yellow/90 transition-colors"
            >
              Mulai Konsultasi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
