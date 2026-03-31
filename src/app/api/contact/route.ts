import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { klantType, naam, adres, telefoon, email, dienst, opmerkingen } = body;

  if (!naam || !telefoon || !email || !dienst) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "info@dumagro.be",
    to: "info@dumagro.be",
    replyTo: email,
    subject: `Nieuwe aanvraag van ${naam} — ${dienst}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000; border-bottom: 3px solid #84cc16; padding-bottom: 8px;">Nieuwe contactaanvraag via Dumagro.be</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Type klant</td><td style="padding: 8px 0; font-weight: 600;">${klantType || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${naam}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Adres</td><td style="padding: 8px 0;">${adres || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Telefoon</td><td style="padding: 8px 0;"><a href="tel:${telefoon}">${telefoon}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Dienst</td><td style="padding: 8px 0;">${dienst}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Opmerkingen</td><td style="padding: 8px 0;">${opmerkingen || "—"}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Verzenden mislukt. Probeer opnieuw." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
