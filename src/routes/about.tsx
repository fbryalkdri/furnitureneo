import { createFileRoute } from "@tanstack/react-router";
import aboutCraft from "@/assets/about-craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — NeoFurniture" },
      { name: "description", content: "Kisah NeoFurniture: 10+ tahun mengkurasi furnitur minimalis premium yang dibuat dengan filosofi ketenangan." },
      { property: "og:title", content: "Tentang NeoFurniture" },
      { property: "og:description", content: "Filosofi & cerita di balik NeoFurniture." },
      { property: "og:image", content: aboutCraft },
    ],
  }),
  component: AboutPage,
});

const values = [
  { num: "01", title: "Material Jujur", desc: "Kami hanya menggunakan kayu solid, kain alami, dan logam berkualitas yang menua dengan anggun." },
  { num: "02", title: "Desain Abadi", desc: "Desain kami dibuat untuk bertahan melewati tren — sederhana, fungsional, dan indah." },
  { num: "03", title: "Kerajinan Tangan", desc: "Setiap potongan dirakit oleh pengrajin berpengalaman di workshop kami sendiri." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-brand-cream py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Tentang Kami</span>
          <h1 className="text-5xl md:text-6xl mt-4 animate-fade-up">Furnitur yang menua bersama Anda</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            NeoFurniture lahir dari keyakinan sederhana: rumah yang baik dimulai dari pilihan furnitur yang dibuat dengan hati.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={aboutCraft}
              alt="Pengrajin NeoFurniture sedang bekerja"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl">Cerita Kami</h2>
            <p className="text-muted-foreground leading-relaxed">
              Berdiri pada tahun 2015 di Jakarta, NeoFurniture dimulai sebagai sebuah workshop kecil dengan tiga pengrajin dan satu visi: menghadirkan furnitur minimalis yang terjangkau tanpa mengorbankan kualitas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lebih dari satu dekade kemudian, kami telah membantu lebih dari 5.000 keluarga di seluruh Indonesia menata rumah mereka — dengan furnitur yang dirancang untuk menua dengan anggun dan menjadi bagian dari cerita hidup Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-yellow-soft py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Nilai Kami</span>
            <h2 className="text-4xl md:text-5xl mt-4">Tiga Prinsip Sederhana</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.num} className="bg-background rounded-2xl p-8">
                <div className="font-serif text-5xl text-foreground/20">{v.num}</div>
                <h3 className="text-xl mt-4 mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
