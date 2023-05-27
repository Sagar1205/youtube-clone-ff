import {applyMiddleware, combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'  //faced error "createStore is deprecated"
                                                    //use configureStore which is now imported from @reduxjs/toolkit

// store enhancer or visualizer
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth.reducer'
import { 
    homeVideosReducer, 
    relatedVideoReducer,
    searchedVideosReducer,
    subscriptionsChannelReducer,
    channelVideosReducer,
} from './reducers/videos.reducer'
import { selectedVideoReducer } from './reducers/videos.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
   channelDetails: channelDetailsReducer,
   commentList: commentListReducer,
   relatedVideos: relatedVideoReducer,
   searchedVideos: searchedVideosReducer,
   subscriptionsChannel: subscriptionsChannelReducer,

   channelVideos: channelVideosReducer,
})

const store = configureStore(
    {reducer:rootReducer},         //faced error "reducer" is a required argument and must be a function or an object of functions that can be passed to combineReducers"
    {},
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store