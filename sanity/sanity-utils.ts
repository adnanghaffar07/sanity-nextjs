// import { createClient, groq } from "next-sanity"

// export async function getProjects() {
//     const client = createClient ({

//         projectId: '2xjwj9rp',
//         dataset: 'production',
//         apiVersion: "2023-02-21",

//     });

//     return client.fetch(
//         groq`*[_type= "project"]{
//             _id,
//             _createAt,
//             name,
//             "slug": slug.current,
//             "image": image.asset->url,
//             url,
//             content

//         }`
//     )
// }