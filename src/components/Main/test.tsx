import { render, screen } from '@testing-library/react'
import React from 'react'

import { Main } from '.'

describe('<Main>', () => {
  it('should render heading', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()
  })
})
