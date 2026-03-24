"use server";

export async function submitContactForm(formData: FormData) {
  const data = {
    naam: formData.get("naam"),
    email: formData.get("email"),
    telefoon: formData.get("telefoon"),
    dienst: formData.get("dienst"),
    bericht: formData.get("bericht"),
  };

  // Server action stub — integrate email/CRM here later
  console.log("Form submission:", data);
}
