import { render } from '@testing-library/react';

import Rethree from './rethree';

describe('Rethree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rethree />);
    expect(baseElement).toBeTruthy();
  });
});
