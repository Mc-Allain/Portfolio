import React, { useContext, useState, useEffect } from "react";
import { LightDarkThemeContext, Theme } from "../../providers/LightDarkTheme";
import classNames from "classnames";
import TabLayout from "./TabLayout";

export const TabType = {
	Default: 'Tab',
	Dropdown: 'Dropdown',
};

const ViewPager = ({ children = [], className }) => {
  const { theme } = useContext(LightDarkThemeContext);

	const [tabs, setTabs] = useState([]);
	const [selectedTabContent, selectTabContent] = useState(null);

	useEffect(() => {
		const initialTabs = children.map((item, key) => {	
			return {
				id: key,
				value: item.props.name,
				active: key === 0,
				type: item.type.name,
				item: item,
			};
		})

		const selectedTab = initialTabs.length > 0 ? initialTabs[0] : null;
		const tabContent = getTabContent(selectedTab);

		setTabs(initialTabs);
		selectTabContent(tabContent);
	}, [children])

	const onTabChange = (selectedTab, tabContent) => {
		const id = selectedTab.id;

		selectedTab.active = true;
		
		const updatedTabs = tabs.map((tab) => {
			if (tab.id !== id) {
				tab.active = false;
			}

			return tab.id === id ? selectedTab : tab;
		});

		setTabs(updatedTabs);
		selectTabContent(tabContent);
	}

	const getTabContent = (selectedTab) => {
		if (selectedTab.type === TabType.Default) {
			return selectedTab.item;
		} else if (selectedTab.type === TabType.Dropdown) {
			return selectedTab.item;
		}
	}

  return (
		<div className={classNames('w-full', className, {
			'bg-white': theme === Theme.LIGHT,
			'bg-gray-800': theme === Theme.DARK,
		})}>
			<TabLayout tabs={tabs} onTabChange={onTabChange} />
			{selectedTabContent}
		</div>
	);
};

export default ViewPager;
