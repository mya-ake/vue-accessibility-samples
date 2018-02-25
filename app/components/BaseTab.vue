<template>
  <div>
    <ul role="tablist" class="tabs">
      <li
        v-for="(tab, index) in tabs"
        v-bind:key="`tab-${index}`"
        role="presentation"
        class="tab"
      >
        <a
          v-on:click.prevent="handleClickTab(index)"
          v-on:keydown="handleKeyDownTab(index, $event)"
          v-bind:href="`#tabpanel-${index}`"
          role="tab"
          ref="tabs"
          v-bind:aria-controls="`tabpanel-${index}`"
          v-bind:aria-selected="tab.selected"
          v-bind:tabindex="tab.selected ? 0 : -1"
          class="tab__link"
        >
          <slot v-bind:name="`tab-${index}`" />
        </a>
      </li>
    </ul>
    <div>
      <div
        v-for="(tab, index) in tabs"
        v-bind:key="`tabpanel-${index}`"
        v-bind:id="`tabpanel-${index}`"
        ref="tabpanels"
        role="tabpanel"
        class="tabpanel"
        v-bind:aria-hidden="!tab.selected"
      >
        <slot v-bind:name="`tabpanel-${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    size: {
      type: Number,
      required: true,
    },
  },

  data () {
    return {
      tabs: Array(this.size).fill({}).map((tab, index) => {
        return {
          selected: index === 0,
        }
      }),
    }
  },

  methods: {
    handleClickTab (index) {
      this.selectTab(index)
    },

    handleKeyDownTab (index, evt) {
      switch (evt.keyCode) {
        case 39: { // right arrow
          this.changeTabSelection(index + 1)
          break
        }
        case 37: { // left arrow
          this.changeTabSelection(index - 1)
          break
        }
        default:
          break
      }
    },

    changeTabSelection (nextIndex) {
      if (nextIndex < 0 || nextIndex >= this.tabs.length) {
        return
      }
      this.selectTab(nextIndex)
      this.$refs.tabs[nextIndex].focus()
    },

    selectTab (index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.selected = index === tabIndex
      })
    },
  },
}
</script>

<style lang="scss" scoped>

.tabs {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tab {
  flex: 1 0 0%;
}

.tab__link {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: .8em .5em;
  color: $ct-default;
  text-align: center;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: $ct-default;
    transition-property: width left;
    transition-duration: .2s;
  }

  &[aria-selected="true"] {
    &::after {
      left: 0;
      width: 100%;
    }
  }
}

.tabpanel {
  &[aria-hidden="true"] {
    display: none;
  }
}

</style>
