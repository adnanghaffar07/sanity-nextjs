import { PortableTextBlock } from "sanity";

export type Cpyrighttext = {
    _id: string;
    _createdAt: Date;
    title: string;
    name: string;
    slug: string;
    content: PortableTextBlock[];
}