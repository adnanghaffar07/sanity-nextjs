import { PortableTextBlock } from "sanity";

export type Bannerbox1content = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}