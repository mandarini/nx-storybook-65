import { render } from '@testing-library/react';

import Retwo from './retwo';

describe('Retwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Retwo />);
    expect(baseElement).toBeTruthy();
  });
});
