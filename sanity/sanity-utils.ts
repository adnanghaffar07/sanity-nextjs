import { Project } from "@/types/Project";
// import { Page } from "@/types/Page";
import { Cpyrighttext } from "@/types/Copyright";
import { Nav } from "@/types/Nav";
import { Bannercontent } from "@/types/Bannercontent";
import { Bannerbox1content } from "@/types/Bannerbox1content";
import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
    const client = createClient ({

        projectId: 'lfi3kjj6',
        dataset: 'production',
        apiVersion: "2024-02-25",

    });

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getNavs(): Promise<Project[]> {
    const client = createClient ({

        projectId: 'lfi3kjj6',
        dataset: 'production',
        apiVersion: "2024-02-25",

    });

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}


export async function getCpyrighttext(): Promise<Cpyrighttext[]> {
    const client = createClient ({

        projectId: 'lfi3kjj6',
        dataset: 'production',
        apiVersion: "2024-02-25",

    });

    return createClient(clientConfig).fetch(
        groq`*[_type == "cpyrighttext"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getBannercontent(): Promise<Bannercontent[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "bannercontent"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getBannerbox1content(): Promise<Bannerbox1content[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "bannerbox1content"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}