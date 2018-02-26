<template>
  <section>
    <header class="header content">
      <h1>Vue.js accessibility samples</h1>
    </header>

    <section class="section content">
      <header class="section__header">
        <h2>Tab Component</h2>
        <span>View on <a href="https://github.com/mya-ake/vue-accessibility-samples/blob/master/app/components/BaseTab.vue">GitHub</a></span>
      </header>

      <base-tab v-bind:size="3">
        <span slot="tab-0">Vue.js</span>
        <section slot="tabpanel-0" class="tabpanel-inner">
          <h3>Vue.js</h3>
          <div>
            <p>プログレッシブJavaScriptフレームワーク</p>
            <a href="https://vuejs.org">Vue.js</a>

            <section>
              <h4>親しみやすい</h4>
              <div>
                <p>すでに HTML、CSS そして JavaScript を知っていますか？ガイドを読んで、すぐにモノ作りを開始しましょう！</p>
              </div>
            </section>

            <section>
              <h4>融通が効く</h4>
              <div>
                <p>ライブラリと完全な機能を備えたフレームワークの間で拡張できる徐々に採用可能なエコシステム</p>
              </div>
            </section>

            <section>
              <h4>高性能</h4>
              <div>
                <p>20KB min+gzipコンパクトなランタイム。猛烈に速い Virtual DOM 。最小限のみ成果で最適化が可能。</p>
              </div>
            </section>
          </div>

          <p>引用：<a href="https://jp.vuejs.org">Vue.js</a></p>
        </section>

        <span slot="tab-1">アクセシビリティ</span>
        <section slot="tabpanel-1" class="tabpanel-inner">
          <h3>アクセシビリティ</h3>
          <div>
            <p>アクセシビリティ（英: accessibility）とは、近づきやすさやアクセスのしやすさのことであり、利用しやすさ、交通の便などの意味を含む。国立国語研究所「外来語」委員会は日本語への言い換えとして「利用しやすさ」を提案している[1][注釈 1]。現代では、広い種類の利用者が製品や建物、サービスなどを支障なく利用できる度合いを指していることが多い。英語本来のアクセシビリティは、ノーマライゼーションの推進の理念から社会のすべてに適用される意味合いがある。日本でのバリアフリーがこれにあたる。</p>
            <p>IT分野では、使いやすさや利用しやすさを意味するユーザビリティに近い意味として使われることが多い。この場合、技術に依存せずさまざまな情報端末やソフトウェアから利用できることを目指している。</p>
            <p>障害のある人の権利条約ができ、以来しばしば、車椅子の人が利用しやすい建物であるかとか、コンピュータの画面を読み上げるスクリーンリーダーなどの技術を利用している人が利用しやすいウェブのサービスであるかといった、議論がなされる。そのため身体機能が低下しがちな高齢者もその対象とされることが多い。</p>
            <p>日本では、「アクセシビリティに配慮する」とか「アクセシビリティを高める」といった表現で用いられる。</p>
          </div>

          <p>引用：<a href="https://ja.wikipedia.org/wiki/アクセシビリティ">アクセシビリティ - Wikipedia</a></p>
        </section>

        <span slot="tab-2">Nuxt.js</span>
        <section slot="tabpanel-2" class="tabpanel-inner">
          <h3>Nuxt.js</h3>
          <div>
            <p>Nuxt.js とはユニバーサルな Vue.js アプリケーションを構築するためのフレームワークです。</p>
            <p>サーバサイドとクライアントサイドの違いを抽象化することで無視して、一貫した方法で UIレンダリングすること に焦点を当てています。</p>
            <p>私たちのゴールは、あるプロジェクトの基礎として利用したり、あるいは既に進行中の Node.js ベースのプロジェクトに追加できる、柔軟なフレームワークを作成することです。</p>
            <p>Nuxt.js は サーバーサイドレンダリング する Vue.js アプリケーションの開発をもっと楽しくするために必要な設定を、あらかじめセットしています。</p>
            <p>それに加えて nuxt generate と呼ばれる別の開発オプションも提供します。これは 静的に生成された Vue.js アプリケーションを構築するためのものです。私たちはこのオプションが、マイクロサービスでウェブアプリケーションを開発するための次の大きな一歩になり得ると信じています。</p>
            <p>Nuxt.js はフレームワークとして、クライアントサイドとサーバーサイド間にまたがる開発を手助けする、たくさんの機能を備えています。例えば、非同期でのデータのやり取りや、Nuxt.js をミドルウェアとして利用することや、レイアウト機能などです。</p>
          </div>
          <a href="https://nuxtjs.org">はじめに - Nuxt.js</a>
        </section>
      </base-tab>
    </section>

  </section>
</template>

<script>
import BaseTab from '~/components/BaseTab'

export default {
  components: {
    BaseTab,
  },
}
</script>

<style lang="scss" scoped>

.content {
  max-width: 35em + 2em;
  margin: 0 auto;
  padding: 0 1em;
}

.header {
  padding: {
    top: 2em;
    bottom: 2em;
  }
}

.section {
  padding: {
    bottom: 1em;
  };
}

.section__header {
  padding: 0 0 2em;
  overflow: hidden;
}

.tabpanel-inner {
  line-height: 1.6;
}

</style>
