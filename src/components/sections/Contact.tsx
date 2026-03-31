"use client";

import { contactInfo, serviceOptions } from "@/lib/data";
import { FormEvent, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import { MapPin, Phone, Mail, Clock, User, Building2, CheckCircle, AlertCircle } from "lucide-react";

const contactDetails = [
  { icon: User, label: "Zaakvoerder", value: contactInfo.name },
  { icon: Building2, label: "BTW nummer", value: contactInfo.btw },
  { icon: MapPin, label: "Adres", value: contactInfo.address },
  { icon: Phone, label: "Telefoon", value: contactInfo.phone },
  { icon: Mail, label: "E-mail", value: contactInfo.email },
  { icon: Clock, label: "Openingsuren", value: contactInfo.hours },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedKlantType, setSelectedKlantType] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    const payload = {
      klantType: selectedKlantType,
      naam: String(formData.get("naam") || ""),
      adres: String(formData.get("adres") || ""),
      telefoon: String(formData.get("telefoon") || ""),
      email: String(formData.get("email") || ""),
      dienst: selectedService,
      opmerkingen: String(formData.get("opmerkingen") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Er is iets misgegaan. Probeer opnieuw.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
      setSelectedService("");
      setSelectedKlantType("");
    } catch {
      setErrorMsg("Verbindingsfout. Controleer uw internetverbinding en probeer opnieuw.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Plan uw afspraak"
            subtitle="Bezorg ons uw gegevens via onderstaand formulier of bel ons gerust op."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-dark-light border border-lime/20 rounded-2xl space-y-4">
                <CheckCircle className="w-16 h-16 text-lime" />
                <h3 className="text-black text-xl font-bold">Aanvraag verzonden!</h3>
                <p className="text-black/60 text-sm max-w-sm">
                  Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-lime underline underline-offset-4 hover:text-lime/80 transition-colors"
                >
                  Nieuw formulier invullen
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="klantType"
                    className="block text-sm font-medium text-black/80 mb-2"
                  >
                    Type klant *
                  </label>
                  <select
                    id="klantType"
                    name="klantType"
                    required
                    value={selectedKlantType}
                    onChange={(e) => setSelectedKlantType(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black focus:outline-none focus:border-lime transition-colors"
                  >
                    <option value="">Selecteer een type</option>
                    <option value="Particulier">Particulier</option>
                    <option value="Bedrijf">Bedrijf</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="naam"
                      className="block text-sm font-medium text-black/80 mb-2"
                    >
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:border-lime transition-colors"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="adres"
                      className="block text-sm font-medium text-black/80 mb-2"
                    >
                      Adres *
                    </label>
                    <input
                      type="text"
                      id="adres"
                      name="adres"
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:border-lime transition-colors"
                      placeholder="Straat en nummer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="telefoon"
                      className="block text-sm font-medium text-black/80 mb-2"
                    >
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:border-lime transition-colors"
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black/80 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:border-lime transition-colors"
                      placeholder="uw@email.be"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dienst"
                    className="block text-sm font-medium text-black/80 mb-2"
                  >
                    Geleverde diensten *
                  </label>
                  <select
                    id="dienst"
                    name="dienst"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black focus:outline-none focus:border-lime transition-colors"
                  >
                    <option value="">Selecteer een dienst</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="opmerkingen"
                    className="block text-sm font-medium text-black/80 mb-2"
                  >
                    Extra opmerkingen
                  </label>
                  <textarea
                    id="opmerkingen"
                    name="opmerkingen"
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-light border border-black/10 rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:border-lime transition-colors resize-none"
                    placeholder="Extra informatie over uw project of voorkeuren..."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-600 text-sm">{errorMsg}</p>
                  </div>
                )}

                <Button type="submit" variant="primary" disabled={status === "loading"}>
                  {status === "loading" ? "Verzenden..." : "Verstuur aanvraag"}
                </Button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info sidebar */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="bg-dark-light border border-black/10 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Contactgegevens
              </h3>
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-lime" />
                  </div>
                  <div>
                    <p className="text-black/50 text-sm">{item.label}</p>
                    <p className="text-black font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
