import { client } from "../../libs/client";

// SSG
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({endpoint:"blog", contentId: id});

    return {
        props: {
            blog: data,
        },
    };
};

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return {
        paths,
        // 設定していないファイルには404が返されるように設定
        fallback: false,
    };
};

export default function BlogId({ blog }) {
    return (
        <main>
            {/* タイトル */}
            <h1>{blog.title}</h1>
            {/* 投稿した日時 */}
            <p>{blog.publishedAt}</p>
            {/* 本文 */}
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}`}}></div>
        </main>
    );
}