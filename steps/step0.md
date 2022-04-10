## 0. はじめに

GraphQL を学びたい JavaScript 初心者へ向けてチュートリアルを用意しました。

理解の前に「動かす感覚」を味わってもらうため、**ほぼ全てコピー&ペーストのみで**、素早く進められるチュートリアルになっています。

### 以前の内容

- [コピペで素早く学ぶ GraphQL: Apollo Server Getting Started](https://qiita.com/RichardImaokaJP/items/ca32e73f922673bc95a5)
- [コピペで素早く学ぶ GraphQL: Apollo Server Getting Resolver](https://qiita.com/RichardImaokaJP/items/2abd1a4200c6dbe45ee6)
- [コピペで素早く学ぶ GraphQL: サンプル「自己紹介ページ」](https://qiita.com/RichardImaokaJP/items/e96fbad3909e791094d2)

### 事前準備

node と npm がインストール済みであることを確認して下さい。

### git レポジトリのクローン

:large_orange_diamond: Action: ターミナルで以下のコマンドを実行してください

```terminal: メイン・ターミナル
git clone https://github.com/richardimaoka/tutorial-apollo-app-employee-listing.git
cd tutorial-apollo-app-employee-listing
```

後ほど別のターミナルを立ち上げるので、このターミナルは `メイン` と表記します。
