import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/indexScreen'
import { BlogProvide } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

//PIPE TO CONTEXT
export default () => {
  return <BlogProvide>
    <App />
  </BlogProvide>
}
