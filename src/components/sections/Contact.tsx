"use client";

import { contactInfo, serviceOptions } from "@/lib/data";
import { FormEvent, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import { MapPin, Phone, Mail, Clock, User, Building2 } from "lucide-react";

const contactDetails = [
  { icon: User, label: "Zaakvoerder", value: contactInfo.name },
  { icon: Building2, label: "BTW nummer", value: contactInfo.btw },
  { icon: MapPin, label: "Adres", value: contactInfo.address },
  { icon: Phone, label: "Telefoon", value: contactInfo.phone },
  { icon: Mail, label: "E-mail", value: contactInfo.email },
  { icon: Clock, label: "Openingsuren", value: contactInfo.hours },
];

interface BookingData {
  klantType: string;
  naam: string;
  adres: string;
  telefoon: string;
  email: string;
  dienst: string;
  opmerkingen: string;
}

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedKlantType, setSelectedKlantType] = useState("");
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setBookingData({
      klantType: selectedKlantType,
      naam: String(formData.get("naam") || ""),
      adres: String(formData.get("adres") || ""),
      telefoon: String(formData.get("telefoon") || ""),
      email: String(formData.get("email") || ""),
      dienst: selectedService,
      opmerkingen: String(formData.get("opmerkingen") || ""),
    });
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
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button type="submit" variant="primary">
                Verstuur aanvraag
              </Button>
            </form>

            {bookingData && (
              <div className="mt-6 bg-dark-light border border-black/10 rounded-xl p-6 space-y-3">
                <h4 className="text-black font-semibold">Uw aanvraag</h4>
                <p className="text-sm text-black/80">Type: {bookingData.klantType}</p>
                <p className="text-sm text-black/80">Naam: {bookingData.naam}</p>
                <p className="text-sm text-black/80">Adres: {bookingData.adres}</p>
                <p className="text-sm text-black/80">Telefoon: {bookingData.telefoon}</p>
                <p className="text-sm text-black/80">E-mail: {bookingData.email}</p>
                <p className="text-sm text-black/80">Dienst: {bookingData.dienst}</p>
                <p className="text-sm text-black/80">
                  Opmerkingen: {bookingData.opmerkingen || "Geen opmerkingen"}
                </p>
              </div>
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
