// Accounts from the pricing-page log-in (email + password, or Google). The
// dataset is public, so only a password hash is stored, never the password or
// a session token. See app/api/auth/*.

import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon,
  readOnly: true,
  fields: [
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "googleId", title: "Google ID", type: "string", description: "Set when the account signed up with Google." }),
    defineField({ name: "passwordHash", title: "Password hash", type: "string", hidden: true }),
  ],
  preview: {
    select: { title: "email", subtitle: "name", googleId: "googleId" },
    prepare: ({ title, subtitle, googleId }) => ({
      title: title || "No email",
      subtitle: [subtitle, googleId ? "Google" : "Email + password"].filter(Boolean).join(" · "),
    }),
  },
});

export default user;
