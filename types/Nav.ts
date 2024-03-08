import { PortableTextBlock } from "sanity";

export type Nav = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    content: PortableTextBlock[];
}