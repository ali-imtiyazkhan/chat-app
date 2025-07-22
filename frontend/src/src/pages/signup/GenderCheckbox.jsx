import React from 'react';

const GenderCheckbox = ({ selectedGender, onChange }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl shadow-md w-fit">
      <h3 className="text-lg font-semibold text-white">Select Gender</h3>

      <div className="flex flex-row gap-6">
        <div className="form-control">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={selectedGender === 'male'}
              onChange={() => onChange('male')}
              className="radio radio-primary"
            />
            <span className="text-base text-white">Male</span>
          </label>
        </div>

        <div className="form-control">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={selectedGender === 'female'}
              onChange={() => onChange('female')}
              className="radio radio-secondary"
            />
            <span className="text-base text-white">Female</span>
          </label>
        </div>

        <div className="form-control">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={selectedGender === 'other'}
              onChange={() => onChange('other')}
              className="radio radio-accent"
            />
            <span className="text-base text-white">Other</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckbox;
