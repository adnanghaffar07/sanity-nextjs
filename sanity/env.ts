export const apiVersion = '2024-03-14'
  export const dataset ="production"
// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

export const projectId = "ld8m6d0z"

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )

export const useCdn = true

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
