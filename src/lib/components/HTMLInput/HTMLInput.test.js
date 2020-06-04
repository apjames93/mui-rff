import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLInput } from './HTMLInput';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
  };
  const comp = shallow(<HTMLInput {...props} />);
  return { comp, props };
}

describe('<Input />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLInput {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
