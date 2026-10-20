// app/components/GoogleScholarArticleCard.tsx

interface GoogleScholarArticleCardProps {
    title: string;
    authors: string;
    journal: string;
    description: string;
    link: string;
  }
  
  export default function GoogleScholarArticleCard({
    title,
    authors,
    journal,
    description,
    link,
  }: GoogleScholarArticleCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 border">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">
          <strong>Authors:</strong> {authors}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Credentials:</strong> {journal}
        </p>
        <p className="text-gray-800 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline font-medium"
        >
          View on Google Scholar →
        </a>
      </div>
    );
  }
  