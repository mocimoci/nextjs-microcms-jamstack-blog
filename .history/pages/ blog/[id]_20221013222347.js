import { client } from "../../libs/client";

// SSG
export const getStaticProps = async () => {
    const id = context.params.id;
    const data = await client.get({endpoint:"blog", contentId: id});

    return {
        props: {
            blog: data,
        },
    };
};

