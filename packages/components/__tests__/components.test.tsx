import React from 'react'
import { render } from '@testing-library/react'
import TestComponents from '../src'

describe('Components test', () => {
    it('should work well', () => {
       const { getByText } = render(<TestComponents name='foo' />)
       expect(getByText(/foo/)).toBeInTheDocument()
    });
});
