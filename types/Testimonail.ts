import { PortableTextBlock } from "sanity";

export type Testimonail = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[];
}