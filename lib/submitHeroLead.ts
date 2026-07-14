function formatPageName(pathname?: string, override?: string): string {
  if (override?.trim()) return override.trim();
  if (!pathname || pathname === "/") return "Home";

  const segment = pathname.split("/").filter(Boolean).pop() || "Home";
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

  const [emailResult, ghlResult] = await Promise.allSettled([
    fetch("/api/projectdiscussionform", {
      method: "POST",
      body: formData,
    }),
    fetch("/api/lead", {
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
    }),
  ]);

  if (emailResult.status === "rejected" || !emailResult.value.ok) {
    throw new Error("Email failed");
  }

  if (ghlResult.status === "rejected") {
    console.warn("GHL submission failed:", ghlResult.reason);
  } else if (!ghlResult.value.ok) {
    const ghlError = await ghlResult.value.json().catch(() => null);
    console.warn("GHL submission warning:", ghlError);
  }

  return true;
}
