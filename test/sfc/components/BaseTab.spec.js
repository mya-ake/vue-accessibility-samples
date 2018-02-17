import {
  shallow,
} from '@vue/test-utils'

import BaseTab from '~/components/BaseTab'

describe('BaseTab', () => {
  it('is a Vue instance', () => {
    const wrapper = shallow(BaseTab)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
