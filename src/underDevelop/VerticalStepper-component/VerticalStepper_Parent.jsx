import React from 'react';
import VerticalStepper_inner from './VerticalStepper_Child';

const steps = [
  {
    label: 'Step one tittle',
    content: <div>Content for Step 1</div>,
  },
  {
    label: 'Step two tittle',
    content: <div>Content for Step 2</div>,
  },
  {
    label: 'Step three tittle',
    content: <div>Content for Step 3</div>,
  }
];

function VerticalStepper_wrapper() {
  return (
    <div className="App">
      <VerticalStepper_inner steps={steps} />
    </div>
  );
}

export default VerticalStepper_wrapper;
