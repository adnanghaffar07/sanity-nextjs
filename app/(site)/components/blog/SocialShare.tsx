import Image, { type StaticImageData } from "next/image";
import whatsappIcon from "@/public/whatsapp.jpeg";
import facebookIcon from "@/public/facebook.jpeg";
import linkedinIcon from "@/public/linkedin.jpeg";
import twitterIcon from "@/public/twitter.jpg";

const LINKEDIN_SUMMARY =
  "Check out this blog on CodeAutomation.ai! A leading platform for custom software and mobile development solutions.";

function shareLinks(title: string, url: string): { name: string; icon: StaticImageData; href: string }[] {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  return [
    { name: "WhatsApp", icon: whatsappIcon, href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\n${url}`)}` },
    {
      name: "Facebook",
      icon: facebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${encodeURIComponent(`Check this out: ${title}. Visit here for more details!`)}`,
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${t}&summary=${encodeURIComponent(LINKEDIN_SUMMARY)}&source=CodeAutomation.ai`,
    },
    {
      name: "Twitter",
      icon: twitterIcon,
      href: `https://twitter.com/share?url=${u}&text=${encodeURIComponent(`Check out this blog: "${title}"! Read more at `)}`,
    },
  ];
}

// "Share this article" buttons on a blog post.
export default function SocialShare({ title, url }: { title: string; url: string }) {
  return (
    <div className="flex flex-row items-center justify-end space-x-4">
      {shareLinks(title, url).map(({ name, icon, href }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name}`}>
          <Image
            src={icon}
            alt={name}
            sizes="32px"
            className="h-6 md:h-8 w-auto hover:scale-110 transition-transform duration-200"
          />
        </a>
      ))}
    </div>
  );
}
