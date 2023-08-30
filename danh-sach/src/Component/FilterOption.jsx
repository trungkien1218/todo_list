import React from 'react'
import PropTypes from 'prop-types';
/***
 * @typedef FilterOptionProps
 * 
 * @property {string} label Nhãn của input
 * @property {string} value Giá trị của ô input
 * @property {boolean} checked cho biết ô input có đưuọc chọn không
 */

/***
 * hiển thị một checkbox để lọc danh sách
 * 
 * @param {FilterOptionProps} props
 */
const FilterOption = ({label, value, checked}) => {
  return <label  className="filter-option">
    <input type="checkbox"
           name="filter-option"
           value={value}
           checked={checked}   
    />
        {label}
    </label>

}
FilterOption.propType ={
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool
}

export default FilterOption