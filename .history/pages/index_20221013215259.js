import { client } from '../libs/client';
import styles from '../styles/Home.module.css'


// SSGで取得
export const getStaticProps = async() => {
    // microCMS・blog => APIプレビュー => JavaScriptを参考に
    const data = await client.get({ endpoint:"blog"})

    console.log(data)
    // 必ずreturnで返す
    return {
      props: {
        blog: data,
      },
    };
};

export default function Home({blog}) {
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <a href="">{blog.title}</a>
        </li>
      ))}
    </div>
  )
}
