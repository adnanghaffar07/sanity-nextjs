import WaitCallCountdown from "./WaitCallCountdown";

export default function WaitPage() {
  return (
    <main className="min-h-screen bg-[#efeff4] px-4 py-10 md:px-6 md:py-16">
      <section className="mx-auto max-w-4xl rounded-xl border border-[#d8dbea] bg-white p-6 shadow-sm md:p-10">
        <h1 className="text-center text-2xl font-extrabold leading-tight text-[#24345f] md:text-4xl">
          WAIT! Emma (Our AI Sales Agent) Is About To Call You Any Second...
        </h1>

        <WaitCallCountdown startSeconds={60} />

        <p className="mt-6 text-lg font-semibold text-[#24345f] md:text-xl">
          Here&apos;s what&apos;s about to happen:
        </p>

        <div className="mt-4 space-y-4 text-base leading-relaxed text-[#2f3e67] md:text-lg">
          <p>
            1️⃣ Your phone will ring in under 60 seconds (Make sure it&apos;s not on Do Not Disturb or you&apos;ll
            miss the magic!)
          </p>
          <p>
            2️⃣ Emma will introduce herself and ask about your business (FYI: She&apos;s very curious. Please be nice
            to her 😉)
          </p>
          <p>
            3️⃣ She&apos;ll get a sense of your current situation and offer to book a free demo call if it seems like
            the right fit for ya. No-strings-attached.
          </p>
        </div>

        <h2 className="mt-8 text-xl font-bold text-[#24345f] md:text-2xl">
          Watch How Emma Blew People&apos;s Minds:
        </h2>
        <p className="mt-1 text-sm font-semibold text-[#5b35a0] md:text-base">Enable sound</p>

        <div className="mt-3 overflow-hidden rounded-lg border border-black bg-black">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Watch how Emma works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
