# ベースイメージを指定
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
# RUN npm install
RUN npm ci

# アプリケーションのソースコードをコピー
COPY . .

# ビルド
RUN npm run build

# 環境変数を設定
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# コンテナ起動時のコマンド
CMD ["npm", "run", "dev"]
