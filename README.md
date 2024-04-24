# 使い方

## 開発環境
```
$ node -v
v21.5.0

$ npm -v
10.5.2
```

## 実行

### サーバー側

```
$ git clone git@github.com:ressharu/Gacha.git
$ cd Gacha

$ npm install
$ npm run dev
```

```
$ open http://localhost:3000
```

### ラズパイ側

pythonのコードを書きかえる

```
$ ssh shota@raspberrypi.local
```

```python:~/main.py
url = '' # このurl変数をサーバーのアドレスへ
```

main.pyを実行する