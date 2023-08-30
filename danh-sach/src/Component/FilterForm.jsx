import React from 'react'
import FilterOption from './FilterOption'
const FilterForm = () => {
  return (
    <form className="filter-form">
      <FilterOption label="Tất cả" value="all" checked/>
      <FilterOption label="Hoàn thành" value="done" />
      <FilterOption label="Chưa hoàn thành" value="doing" />
      
    </form>
  )
}

export default FilterForm