import { createClient } from "microcms-js-sdk";

export const client = createClient({
    // microCMS・API設定 => エンドポイントにあるドメインから.microcms.ioを引いたもの
    serviceDomain: "bolg-tutorial-nextjs",
    // microCMS・権限管理 => 1個のAPIキー => APIキー名
    // 見られてはいけないのでenvファイルで管理
    apiKey: process.env.API_KEY,
});

