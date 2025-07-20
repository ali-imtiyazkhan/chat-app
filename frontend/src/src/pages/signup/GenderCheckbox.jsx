import React from 'react';

const GenderCheckbox = () => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl shadow-md w-fit">
      <h3 className="text-lg font-semibold text-color">Select Gender</h3>

      <div className="flex flex-row gap-6">
        <div className="form-control">
          <label className="flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-base text-primary">Male</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>

        <div className="form-control">
          <label className="flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-base text-secondary">Female</span>
            <input type="checkbox" className="checkbox checkbox-secondary" />
          </label>
        </div>

        <div className="form-control">
          <label className="flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-base text-accent">Other</span>
            <input type="checkbox" className="checkbox checkbox-accent" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckbox;
