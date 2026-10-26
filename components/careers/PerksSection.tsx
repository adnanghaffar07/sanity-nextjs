import Image, { type StaticImageData } from "next/image";
import perksIllustration from "@/public/career2.svg";
import timeIcon from "@/public/time.png";
import fuelIcon from "@/public/fuel-allowance.png";
import leavesIcon from "@/public/paid-leaves.png";
import tripIcon from "@/public/annual-trip.png";
import medicalIcon from "@/public/medical.png";
import incrementIcon from "@/public/annual-ic.png";
import bonusIcon from "@/public/bonuses.png";

const PERKS: { icon: StaticImageData; title: string }[] = [
  { icon: timeIcon, title: "Flexible Timings" },
  { icon: fuelIcon, title: "Fuel Allowance" },
  { icon: leavesIcon, title: "Paid Leaves" },
  { icon: tripIcon, title: "Annual Trip" },
  { icon: medicalIcon, title: "Medical Coverage" },
  { icon: incrementIcon, title: "Annual Increment" },
  { icon: bonusIcon, title: "Bonuses" },
];

function Perk({ icon, title }: (typeof PERKS)[number]) {
  return (
    <li className="flex flex-col">
      <Image src={icon} alt="" className="self-center aspect-[1] w-[100px] h-auto" />
      <span className="mt-2">{title}</span>
    </li>
  );
}

export default function PerksSection() {
  return (
    <div className="max-w-full mx-auto relative">
      <div className="flex flex-col mx-auto self-center w-full max-w-[1440px] max-md:max-w-full relative z-10">
        <div className="lg:px-10 px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-5 lg:py-16 py-8">
            <div className="text-center">
              <Image
                src={perksIllustration}
                alt=""
                width={532}
                height={532}
                className="lg:w-3/4 md:w-1/2 w-3/4 h-auto inline-block"
              />
            </div>
            <div className="xl:pr-10 relative text-left md:text-right">
              <h2 className="xl:text-5xl lg:text-4xl text-3xl mb-3 text-black">Perks &amp; Benefits</h2>
              <div className="mb-10">
                <p className="lg:text-lg text-base text-black text-left md:text-right">
                  Get special perks and benefits such as flexible schedules and career advancement chances. Join us and
                  advance your career in CodeAutomation today.
                </p>
              </div>

              {/* 3 perks on the first row, 4 on the second. */}
              <div className="flex flex-wrap gap-5 justify-start md:justify-end mt-7 text-xs text-center text-black">
                <ul className="grid grid-cols-3 gap-4 sm:gap-5 sm:justify-center">
                  {PERKS.slice(0, 3).map((perk) => (
                    <Perk key={perk.title} {...perk} />
                  ))}
                </ul>
                <ul className="grid grid-cols-4 gap-4 sm:gap-5 sm:justify-center">
                  {PERKS.slice(3).map((perk) => (
                    <Perk key={perk.title} {...perk} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
