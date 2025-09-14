import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const options = Array.from({ length: 20 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Option ${i + 1}`,
}));

export const Dropdown = ({
  portal,
  multipleSelect,
  search,
  isClearable,
  showElementWithMoreThan9999ZIndex,
}) => {
  const portalTarget =
    typeof document !== "undefined"
      ? document.getElementById("dropdown")
      : null;

  const filterOption = (candidate, input) =>
    candidate.label.toLowerCase().includes(input.toLowerCase());

  return (
    <div className='p-4 flex items-center gap-4'>
      <label htmlFor='dropdown-select'>Label</label>
      <Select
        className='w-full'
        id='dropdown-select'
        options={options}
        isMulti={multipleSelect}
        isSearchable={search}
        placeholder='Select an option'
        isClearable={isClearable}
        filterOption={search ? filterOption : null}
        menuPortalTarget={portal ? portalTarget || document.body : null}
        styles={{
          menu: (base) => ({
            ...base,
            zIndex: 99999,
            position: "absolute",
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 99999,
          }),
        }}
      />
      {/* Element with 9999+ z index */}
      {showElementWithMoreThan9999ZIndex && (
        <div className='absolute top-[80px] bg-red-500 z-[10000] h-[50px] w-[500px]' />
      )}
    </div>
  );
};

Dropdown.propTypes = {
  portal: PropTypes.bool,
  multipleSelect: PropTypes.bool,
  search: PropTypes.bool,
  isClearable: PropTypes.bool,
  portalTargetId: PropTypes.string,
};
