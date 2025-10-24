import assert from 'assert'
import { sum } from './index.js'

describe('sum', () => {
  ;(it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  }),
    it('should add 0.3 + 0.2 to equal 0,3', () => {
      assert.equal(sum(0.3, 0.2), 0.5)
    }))
})
