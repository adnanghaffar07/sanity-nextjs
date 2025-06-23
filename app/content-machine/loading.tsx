export default function Loading() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
      
      {/* Subject input skeleton */}
      <div className="h-10 bg-gray-200 rounded w-full"></div>
      
      {/* Intro text skeleton */}
      <div className="h-24 bg-gray-200 rounded w-full"></div>
      
      {/* Content blocks skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="border p-4 rounded-lg space-y-2">
          <div className="h-10 bg-gray-200 rounded w-full"></div>
          <div className="h-24 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
      
      {/* Form fields skeleton */}
      <div className="h-10 bg-gray-200 rounded w-full"></div>
      <div className="h-24 bg-gray-200 rounded w-full"></div>
      
      {/* Submit button skeleton */}
      <div className="h-10 bg-gray-200 rounded w-32"></div>
    </div>
  );
}
