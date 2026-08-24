function formatPageName(pathname?: string, override?: string): string {
  if (override?.trim()) return override.trim();
  if (!pathname || pathname === "/") return "Home";

  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "services" && segments.length > 1) {
    return segments
      .slice(1)
      .flatMap((segment) => segment.split("-"))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const segment = segments.pop() || "Home";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function submitHeroLead(data: {
  name: string;
  email: string;
  phone: string;
  lookingFor: string;
  message: string;
  pageName?: string;
  pageUrl?: string;
  pathname?: string;
  recaptchaValue?: string;
}) {
  const formData = new FormData();
  const resolvedPageName = formatPageName(data.pathname, data.pageName);

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("number", data.phone);
  formData.append("looking", data.lookingFor);
  formData.append("message", data.message);
  formData.append("pagename", resolvedPageName);
  formData.append("page_url", data.pageUrl || "");
  formData.append("recaptcha_value", data.recaptchaValue || "");

  const emailResponse = await fetch("/api/projectdiscussionform", {
    method: "POST",
    body: formData,
  });

  if (!emailResponse.ok) {
    const errorData = await emailResponse.json().catch(() => null);
    throw new Error(errorData?.error || "Form submission failed");
  }

  try {
    const ghlResponse = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        what_are_you_looking_for: data.lookingFor,
        message: data.message,
        page_url: data.pageUrl || "",
      }),
    });

    if (!ghlResponse.ok) {
      const ghlError = await ghlResponse.json().catch(() => null);
      console.warn("GHL submission warning:", ghlError);
    }
  } catch (ghlError) {
    console.warn("GHL submission failed:", ghlError);
  }

  return true;
}
