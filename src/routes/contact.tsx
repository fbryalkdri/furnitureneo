import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — NeoFurniture" },
      { name: "description", content: "Hubungi NeoFurniture untuk konsultasi desain interior, custom furniture, atau pertanyaan produk." },
      { property: "og:title", content: "Hubungi NeoFurniture" },
      { property: "og:description", content: "Mari diskusikan kebutuhan furnitur Anda." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-cream py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Kontak</span>
          <h1 className="text-5xl md:text-6xl mt-4 animate-fade-up">Mari Berbincang</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Punya pertanyaan, ide, atau ingin konsultasi? Tim kami siap membantu Anda.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl mb-3">Kunjungi Showroom</h2>
              <p className="text-muted-foreground">Senin – Sabtu, 10:00 – 19:00 WIB</p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow-soft">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Alamat</div>
                  <p className="text-sm text-muted-foreground mt-1">Jl. Sudirman No. 24, Jakarta Selatan, Indonesia 12190</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow-soft">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Telepon</div>
                  <p className="text-sm text-muted-foreground mt-1">+62 21 5555 0199</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow-soft">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <p className="text-sm text-muted-foreground mt-1">hello@neofurniture.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-brand-cream p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center animate-fade-up">
                  <CheckCircle2 className="h-14 w-14 mx-auto text-foreground" />
                  <h3 className="mt-6 text-2xl">Terima kasih!</h3>
                  <p className="mt-2 text-muted-foreground">Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">Nama Lengkap</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2">Subjek</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">Pesan</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background hover:bg-foreground/90 transition-all hover:gap-3"
                  >
                    Kirim Pesan
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
