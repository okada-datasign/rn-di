[これ](https://marmelab.com/blog/2019/03/13/react-dependency-injection.html)を参考にReactNativeでのDIの仕方を調べる。

* ReactはDIコンテナを必要としないDIを提供する。

* ContextApi
  * `Service Locator`パターンに似ているらしい
  * コンポーネントのテストが少し難しくなる
  * アプリケーション全体でデータやサービスをシェアするために利用するべきもの

* Interface Segregation
  * Propsのインターフェイス

とりあえずサンプルコードを書いてみました。

## 2020.06.12

* サンプルコードをGitへ移動
  * https://github.com/okada-datasign/rn-di
* DIのコードがビルドできない問題をとりあえず解消。
  * コンストラクタインジェクションがうまく行かない
  * プロパティインジェクションに変更したらビルドできた
  * DIしたコードの動作を試せていない

## 2020.06.26

### [Injecting Dependencies Into Epics](https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html)

* Epicミドルウェアに依存性を注入するためのAPIが用意されている
* サンプルコードにある`Application`オブジェクトを注入すればよいかもしれない

### ReduxとCleanArchtectureについて
* [Redux上でのCleanArchtectureのイメージ](https://qiita.com/sho_v00/items/348f7e0398d902daa894#%E6%A7%8B%E9%80%A0%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8)
  * ReduxをCleanArchtectureに当てはめて考えるとよくわからなくなる。。。
