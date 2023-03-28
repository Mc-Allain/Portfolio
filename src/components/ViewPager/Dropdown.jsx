import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react'
import { TabType } from '.';
import { LightDarkThemeContext, Theme } from '../../providers/LightDarkTheme'
import TabCapsuleButton from './TabCapsuleButton'

const Dropdown = ({children, handleDropdownTabOnClick}) => {
  const { theme } = useContext(LightDarkThemeContext);
	const [tabs, setTabs] = useState([]);

	useEffect(() => {
		const initialTabs = children.map((item, key) => {	
			return {
				id: key,
				value: item.props.name,
				active: false,
				type: item.type.name,
				item: item,
			};
		})

		setTabs(initialTabs);
	}, [children])

	const onTabChange = (selectedTab) => {
		const id = selectedTab.id;

		selectedTab.active = true;
		
		const updatedTabs = tabs.map((item) => {
			if (item.id !== id) {
				item.active = false;
			}

			return item.id === id ? selectedTab : item;
		});

		setTabs(updatedTabs);
	}

  const handleOnClick = (selectedTab) => {
    if (selectedTab.type === TabType.Default) {
      onTabChange(selectedTab);
			handleDropdownTabOnClick(selectedTab);
    }
  };

  return (
    <div className={classNames(`absolute border px-3 py-2 rounded-[16px] translate-y-12`, {
      'bg-gray-100 border-gray-300': theme === Theme.LIGHT,
      'bg-gray-900 border-gray-600': theme === Theme.DARK
    })}> {
      tabs.map((tab, key) => {
        return (
          <TabCapsuleButton
            key={key}
            tab={tab}
            handleOnClick={handleOnClick}
          >
            {tab.value}
          </TabCapsuleButton>
        )
      })
    }
    </div>
  )
}

export default Dropdown