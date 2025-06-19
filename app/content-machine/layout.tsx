export default function ContentMachineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add a loading skeleton */}
      <div className="mx-auto max-w-2xl py-8">
        {children}
      </div>
    </div>
  );
}

// Add metadata for better SEO and Web Vitals
export const metadata = {
  title: 'Content Machine - Newsletter System',
  description: 'Send newsletters to your leads efficiently',
};
