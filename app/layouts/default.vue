<template>
  <div class="container">
    <main class="main">
      <nuxt/>
    </main>
    <footer class="footer">
      <small class="copyright">&copy; 2018 <a href="https://mya-ake.com/">mya-ake</a></small>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

.container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100%;
}

.footer {
  padding: .5em 1em;
  text-align: center;
}

.copyright {
  font-size: 1.6rem;
}

</style>
