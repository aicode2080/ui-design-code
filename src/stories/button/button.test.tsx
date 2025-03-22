import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('展示一个button组件', () => {
    const component = render(<Button label="按钮" />);
    expect(component.baseElement).toMatchSnapshot();
  });

  test('展示一个不同大button组件', () => {
    const component = render(
      <Button label="large" />,
    );
    expect(component.baseElement).toMatchSnapshot();
  });
});
