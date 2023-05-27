//ctrl+p for searching for files

import React, {useEffect, useState} from "react";
import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/loginScreen";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import {Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import './_app.scss';
import { useSelector } from "react-redux";
import SearchScreen from "./screens/SearchScreen";
import SubscriptionsScreen from "./screens/subscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from './screens/channelScreen/ChannelScreen'

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)
 
    const handleToggleSidebar = () => toggleSidebar(value => !value)
 
    return (
       <>
          <Header handleToggleSidebar={handleToggleSidebar} />
          <div className='app__container'>
             <Sidebar
                sidebar={sidebar}
                handleToggleSidebar={handleToggleSidebar}
             />
             <Container fluid className='app__main '>
                {children}
             </Container>
          </div>
       </>
    )
 }

const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth)

   const history = useNavigate()

   useEffect(() => {
      if (!loading && !accessToken) {
         history('/auth')
      }
   }, [accessToken, loading, history])
    
    return  (
        <Routes>
            <Route
                path='/' exact
                element={
                    <Layout>
                    <HomeScreen />
                    </Layout>
                }
            />

            <Route
                path='/auth'
                element={
                    <LoginScreen />
                }
            />

            <Route
                path='/search/:query'
                element={
                    <Layout>
                    <SearchScreen/>
                    </Layout>
                }
            />

            <Route
                path='/watch/:id'
                element={
                    <Layout>
                    <WatchScreen />
                    </Layout>
                }
            />

            
            <Route
            path='/feed/subscriptions'
            element={
                <Layout>
                <SubscriptionsScreen />
                </Layout>
            }
            />

        
            <Route
                path='/channel/:channelId'
                element={
                    <Layout>
                    <ChannelScreen />
                    </Layout>
                } 
            />

            <Route
                path="*" 
                element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}

export default App;