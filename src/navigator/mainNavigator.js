import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313442Navigator from '../features/BlankScreen313442/navigator';
import BlankScreen213441Navigator from '../features/BlankScreen213441/navigator';
import BlankScreen113437Navigator from '../features/BlankScreen113437/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313442: { screen: BlankScreen313442Navigator },
BlankScreen213441: { screen: BlankScreen213441Navigator },
BlankScreen113437: { screen: BlankScreen113437Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
