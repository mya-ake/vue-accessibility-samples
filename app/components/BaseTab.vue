<template>
  <div>
    <ul role="tablist">
      <li role="presentation">
        <a href="#sec-1" role="tab" aria-controls="sec-1" aria-selected="true">sec1</a>
      </li>
      <li role="presentation">
        <a href="#sec-2" role="tab" aria-controls="sec-2">sec2</a>
      </li>
      <li role="presentation">
        <a href="#sec-3" role="tab" aria-controls="sec-3">sec3</a>
      </li>
    </ul>
    <div>
      <section id="sec-1">
        <h3>section 1</h3>
      </section>
      <section id="sec-2" aria-hidden="true">
        <h3>section 2</h3>
      </section>
      <section id="sec-3" aria-hidden="true">
        <h3>section 3</h3>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
