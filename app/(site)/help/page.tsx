// app/help/page.tsx

export default function HelpPage() {
    return (
      <main className="max-w-5xl mx-auto px-4 py-10 mt-32 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">How to Send Blog Emails to the Right Audience</h1>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 1: Select the Audience Checkboxes</h2>
          <p className="mb-3">
            Before you publish a blog post in Sanity, scroll down to the <strong>“Audience Checkboxes”</strong> field. 
            You’ll see options like:
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>📱 Mobile App Clients</li>
            <li>🛒 CMS / Website Clients</li>
            <li>🤖 AI / Automation Clients</li>
            <li>...and more</li>
          </ul>
          <p>
            You <strong>must select at least one</strong> audience segment so the email is delivered to the right people.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 2: What Happens Next?</h2>
          <p>
            When you publish the blog post, our system automatically sends an email to the clients who match the 
            selected audience.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 3: See What It Looks Like</h2>
          <p className="mb-2">Here’s what the Audience Checkboxes look like inside Sanity:</p>
          <div className="rounded-md border p-4 bg-gray-50">
            <img
              src="/blog-publish.png"
              alt="Screenshot of Audience Checkboxes in Sanity"
              className="rounded-md shadow"
            />
          </div>
          <p className="text-sm mt-2 text-gray-500">
            If you don’t see this field, please contact the developer team.
          </p>
        </section> 
      </main>
    );
  }
  