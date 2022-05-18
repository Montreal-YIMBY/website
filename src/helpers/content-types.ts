import { ImageDataLike } from "gatsby-plugin-image";

export type Nodes<N> = {
    nodes: N[];
};

export type StrapiImage = {
    alternativeText: string;
    localFile: ImageDataLike;
};

export type RichTextContent<C extends string> = {
    data: {
        [key in C]: string
    }
};

export type KeyPoint = {
    title: string;
    content: {
        data: { content: string; }
    };
};