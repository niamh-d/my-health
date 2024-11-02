import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('should have Hello text', () => {
    render(<Home />)
    const helloText = screen.getByText(/hello/i)
    expect(helloText).toBeInTheDocument()
  })

  it('should contain the text "niamh"', () => {
    render(<Home />)
    const niamhText = screen.getByText(/niamh/i)
    expect(niamhText).toBeInTheDocument()
  })
})
