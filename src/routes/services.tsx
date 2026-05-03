import { createFileRoute } from "@tanstack/react-router";
import { Sofa, Palette, Truck, Wrench, Headphones, Ruler } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan Kami — NeoFurniture" },
      { name: "description", content: "Layanan NeoFurniture: konsultasi desain, custom furniture, pengiriman & instalasi, perawatan, dan garansi." },
      { property: "og:title", content: "Layanan Kami — NeoFurniture" },
      { property: "og:description", content: "Layanan lengkap untuk kebutuhan furnitur Anda." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Palette, title: "Konsultasi Desain Interior", desc: "Sesi konsultasi gratis dengan desainer interior kami untuk merancang ruang impian Anda." },
  { icon: Ruler, title: "Custom Furniture", desc: "Desain furnitur sesuai ukuran dan kebutuhan unik ruang Anda — dari sketsa hingga produksi." },
  { icon: Truck, title: "Pengiriman & Instalasi", desc: "Pengiriman aman ke seluruh Indonesia, lengkap dengan tim instalasi profesional." },
  { icon: Wrench, title: "Perawatan Berkala", desc: "Layanan perawatan dan reparasi untuk menjaga furnitur Anda tetap prima bertahun-tahun." },
  { icon: Sofa, title: "Reupholstery", desc: "Perbarui sofa atau kursi favorit Anda dengan material baru tanpa mengganti rangkanya." },
  { icon: Headphones, title: "Dukungan 24/7", desc: "Tim layanan pelanggan kami siap membantu kapan pun Anda membutuhkan." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-brand-cream py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Layanan</span>
          <h1 className="text-5xl md:text-6xl mt-4 animate-fade-up">Layanan Lengkap untuk Anda</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Dari ide pertama hingga furnitur tiba di rumah Anda — kami mendampingi setiap langkahnya.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="group rounded-2xl border border-border/50 bg-background p-8 hover:bg-brand-cream hover:border-border transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow-soft mb-6 group-hover:bg-brand-yellow transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
