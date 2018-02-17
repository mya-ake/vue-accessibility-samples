import {
  shallow,
} from '@vue/test-utils'

import BaseTab from '~/components/BaseTab'

describe('BaseTab', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(BaseTab)
  })

  describe('初期', () => {
    it('最初のタブが選択されていて、最初のタブパネルが表示されている', () => {
      expect.assertions(2)

      const firstTab = wrapper.findAll('.tab').wrappers[0]
      const firstTabpanel = wrapper.findAll('.tabpanel').wrappers[0]
      expect(firstTab.attributes()['aria-selected']).toBe('true')
      expect(firstTabpanel.attributes()['aria-hidden']).toBeUndefined()
    })

    it('最初のタブ以外は未選択で、最初のタブ以外は非表示になっている', () => {
      const tabsOtherThanFirstTab = wrapper.findAll('.tab').wrappers.slice(1)
      const tabpanelsOtherThanFirstTabpanel = wrapper.findAll('.tabpanel').wrappers.slice(1)

      const assertionCount = tabsOtherThanFirstTab.length + tabpanelsOtherThanFirstTabpanel.length
      expect.assertions(assertionCount)

      for (const tab of tabsOtherThanFirstTab) {
        expect(tab.attributes()['aria-selected']).toBeUndefined()
      }
      for (const tabpanel of tabpanelsOtherThanFirstTabpanel) {
        expect(tabpanel.attributes()['aria-hidden']).toBe('true')
      }
    })
  })

  describe('タブの切り替え', () => {
    it('2個目のタブをクリックしたとき、1個目が非表示になり、2個目が表示になる', () => {
      expect.assertions(4)

      const [firstTab, secondTab] = wrapper.findAll('.tab').wrappers
      const [firstTabpanel, secondTabpanel] = wrapper.findAll('.tabpanel').wrappers

      secondTab.trigger('click')

      expect(firstTab.attributes('aria-selected')).toBeUndefined()
      expect(secondTab.attributes('aria-selected')).toBe('true')
      expect(firstTabpanel.attributes('aria-hidden')).toBe('true')
      expect(secondTabpanel.attributes('aria-hidden')).toBeUndefined()
    })
  })
})
