import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HTMLCheckbox } from './HTMLCheckbox';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
    label: 'apples',
  };
  const comp = shallow(<HTMLCheckbox {...props} />);
  return { comp, props };
}

describe('<HTMLCheckbox />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <HTMLCheckbox {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should parse the checkbox to determine if checkbox is checked or not', () => {
    const { comp } = setup();
    const rfffield = comp.find('RFFField').first();
    const result = rfffield.prop('parse')([null]);
    expect(result).toEqual(true);
  });
});
