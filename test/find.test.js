import test from 'ava'
const { prraypromise } = require('../src/prraypromise')
const Prray = require('../src/prray')
const { isGte3, isGte3Async } = require('./test-utils')

const p1 = new Prray([1,2,3])
const p2 = new Prray([0,2])

const pp1 = prraypromise(Promise.resolve([1,2,3]))
const pp2 = prraypromise(Promise.resolve([0,2]))

test('prray find', async (t) => {
  t.true(p1.find(isGte3Async) instanceof Promise)
  t.true(p1.find(isGte3) instanceof Promise)

  t.is(await p1.find(isGte3Async), 3)
  t.is(await p2.find(isGte3Async), undefined)

  t.is(await p1.find(isGte3), 3)
  t.is(await p2.find(isGte3), undefined)
})

test('prraypromise find', async (t) => {
  t.true(pp1.find(isGte3Async) instanceof Promise)
  t.true(pp1.find(isGte3) instanceof Promise)

  t.is(await pp1.find(isGte3Async), 3)
  t.is(await pp2.find(isGte3Async), undefined)

  t.is(await pp1.find(isGte3), 3)
  t.is(await pp2.find(isGte3), undefined)
})
