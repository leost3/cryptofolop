import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title',
    description: 'description'
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Basic = (args: any) => <Main {...args} />
