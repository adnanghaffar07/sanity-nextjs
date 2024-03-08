import { PortableTextBlock } from "sanity";

export type Bannercontent = {
    _id: string;
    _createdAt: Date;
    title: string;
    name: string;
    slug: string;
    content: PortableTextBlock[];
}