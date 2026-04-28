export async function submitHeroLead(data: {
  name: string;
  email: string;
  phone: string;
  lookingFor: string;
  message: string;
  pageName?: string;
}) {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("number", data.phone);
  formData.append("looking", data.lookingFor);
  formData.append("message", data.message);
  formData.append("pagename", data.pageName || "Hero");

  // 1. Email API
  const emailRes = await fetch("/api/projectdiscussionform", {
    method: "POST",
    body: formData,
  });

  if (!emailRes.ok) throw new Error("Email failed");

  // 2. DB / CMS
  // const dbRes = await fetch("/api/submit", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     name: data.name,
  //     email: data.email,
  //     contact_number: data.phone,
  //     looking: data.lookingFor,
  //     message: data.message,
  //   }),
  // });

  // if (!dbRes.ok) throw new Error("DB failed");

  // 3. CRM (non-blocking)
  fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      what_are_you_looking_for: data.lookingFor,
      message: data.message,
    }),
  }).catch(() => {
    console.warn("CRM failed (ignored)");
  });

  return true;
}