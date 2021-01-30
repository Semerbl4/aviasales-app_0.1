import React from 'react';

import filtersStyle from './Filters.module.scss';

const Filters = () => (
  <form className={filtersStyle.filters}>
    <fieldset className={filtersStyle.filters__set}>
      <legend className={filtersStyle['filters__set-title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" />
        <span className={filtersStyle['filters__visible-check']} />
        <p>Все</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" />
        <span className={filtersStyle['filters__visible-check']} />
        <p>0</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" />
        <span className={filtersStyle['filters__visible-check']} />
        <p>1</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" />
        <span className={filtersStyle['filters__visible-check']} />
        <p>2</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" />
        <span className={filtersStyle['filters__visible-check']} />
        <p>3</p>
      </label>
    </fieldset>
  </form>
);

export default Filters;
