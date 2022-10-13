import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss"

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
        <main className={styles.main}>
            {/* タイトル */}
            <h1 className={styles.title}>{blog.title}</h1>
            {/* 投稿した日時 */}
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            {/* 本文 */}
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}`}} className={styles.post}></div>
        </main>
    );
}