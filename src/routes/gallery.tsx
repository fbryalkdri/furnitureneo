import { createFileRoute } from "@tanstack/react-router";
import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";
import productArmchair from "@/assets/product-armchair.jpg";
import productShelf from "@/assets/product-shelf.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri Produk — NeoFurniture" },
      { name: "description", content: "Jelajahi koleksi furnitur minimalis NeoFurniture: kursi, meja, sofa, rak, dan inspirasi ruang." },
      { property: "og:title", content: "Galeri Produk — NeoFurniture" },
      { property: "og:description", content: "Koleksi furnitur minimalis kami." },
      { property: "og:image", content: galleryBedroom },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: productChair, name: "Kursi Aura", category: "Kursi", price: "Rp 4.800.000", aspect: "aspect-[3/4]" },
  { img: galleryDining, name: "Set Ruang Makan Sole", category: "Set", price: "Rp 24.500.000", aspect: "aspect-[4/3]" },
  { img: productArmchair, name: "Armchair Boucle", category: "Kursi", price: "Rp 6.200.000", aspect: "aspect-square" },
  { img: galleryBedroom, name: "Set Kamar Tidur Linen", category: "Set", price: "Rp 18.900.000", aspect: "aspect-[4/3]" },
  { img: productTable, name: "Meja Linea Oak", category: "Meja", price: "Rp 12.500.000", aspect: "aspect-square" },
  { img: productShelf, name: "Rak Vista", category: "Penyimpanan", price: "Rp 8.900.000", aspect: "aspect-[3/4]" },
  { img: galleryOffice, name: "Ruang Kerja Solo", category: "Set", price: "Rp 15.700.000", aspect: "aspect-[4/3]" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-brand-cream py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Galeri</span>
          <h1 className="text-5xl md:text-6xl mt-4 animate-fade-up">Koleksi & Inspirasi</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Setiap potongan furnitur diciptakan untuk hidup lama bersama Anda — dengan material pilihan dan kerajinan tangan terbaik.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.name} className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-2xl bg-brand-yellow-soft ${item.aspect} mb-4`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs">
                    {item.category}
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg">{item.name}</h3>
                  <span className="text-sm text-muted-foreground">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
