import React from 'react';

import tabsStyle from './Tabs.module.scss';

const Tabs = () => (
  <div className={tabsStyle['tabs-container']}>
    <button className={tabsStyle['tabs-buttons']} type="button">
      САМЫЙ ДЕШЁВЫЙ
    </button>
    <button className={tabsStyle['tabs-buttons']} type="button">
      САМЫЙ БЫСТРЫЙ
    </button>
  </div>
);

export default Tabs;
