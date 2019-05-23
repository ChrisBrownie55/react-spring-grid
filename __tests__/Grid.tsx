import React from 'react'
import { Grid } from '../components/Grid'

import { render, cleanup } from 'react-testing-library'
import { wait } from 'dom-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

test('should render', async () => {
  const { debug, getByText } = render(
    <Grid
      items={[1, 2, 3, 4, 5, 6].map(x => ({
        value: x,
        width: 32,
        height: 32
      }))}
      keys={(item: any) => item.value}
      renderer={({ data, style }) => <div style={style}>{data.value}</div>}
      wrapper="section"
      style={{
        width: '5rem'
      }}
    />
  )

  await wait(() => {
    if (!getByText('1').style.left) {
      throw new Error('left missing')
    }
  })
  debug()
})

test.todo('should render items on multiple rows')
