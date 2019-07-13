import React from 'react';
import { shallow,render,mount } from 'enzyme';
import Board from './Board';

describe('Board', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Board debug />);
        expect(component).toMatchSnapshot();
    });
});

describe('Board', () => {
  it('button click should show X', () => {
   const rendered = mount(<Board />);
   const ticButton = rendered.find({"id":"1"});
   const nextPlayer = rendered.find({"id":"winner"});
   ticButton.simulate('click');
   expect(ticButton.text()).toEqual("X");
   expect(nextPlayer.text()).toEqual("O");
  });
});

describe('Board', () => {
  it('button click should set nextPlayer O', () => {
   const rendered = mount(<Board />);
   const ticButton = rendered.find({"id":"1"});
   const nextPlayer = rendered.find({"id":"winner"});
   ticButton.simulate('click');
   expect(nextPlayer.text()).toEqual("O");
  });
});