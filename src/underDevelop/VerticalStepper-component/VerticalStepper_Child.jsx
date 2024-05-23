import React, { useState } from 'react';
import PropTypes from 'prop-types';

function VerticalStepper_inner({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prevStep => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prevStep => prevStep - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start mb-8">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= activeStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 w-px border-l-2 ${index < activeStep ? 'border-blue-500' : 'border-gray-300'} border-dashed`} style={{ minHeight: '2rem' }}></div>
            )}
          </div>
          <div className="ml-4">
            <div className={`text-lg font-medium ${index <= activeStep ? 'text-blue-500' : 'text-gray-500'}`}>
              {step.label}
            </div>
              <div className="mt-2">
                <p>{step.content}</p>
                {index === activeStep && (
                <div className="mt-4">
                  <button
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleNext}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                  </button>
                  {index > 0 && (
                    <button
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  )}
                </div>
            )}
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

VerticalStepper_inner.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default VerticalStepper_inner;
