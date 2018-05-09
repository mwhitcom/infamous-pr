import * as actionTypes from './actionTypes';

// Fetch news stories
export const fetchNews = () => ({
    type: actionTypes.FETCH_NEWS_TRIGGER
})

export const fetchNewsSuccess = payload => ({
    type: actionTypes.FETCH_NEWS_SUCCESS,
    payload
})

export const fetchNewsError = payload => ({
    type: actionTypes.FETCH_NEWS_ERROR,
    payload
})

// Create news story
export const createNews = payload => ({
    type: actionTypes.CREATE_NEWS_TRIGGER,
    payload
})

export const createNewsSuccess = payload => ({
    type: actionTypes.CREATE_NEWS_SUCCESS,
    payload
})

export const createNewsError = payload => ({
    type: actionTypes.CREATE_NEWS_ERROR,
    payload
})

// Update news story
export const updateNews = payload => ({
    type: actionTypes.UPDATE_NEWS_TRIGGER,
    payload
})

export const updateNewsSuccess = payload => ({
    type: actionTypes.UPDATE_NEWS_SUCCESS,
    payload
})

export const updateNewsError = payload => ({
    type: actionTypes.UPDATE_NEWS_ERROR,
    payload
})

// Delete news story
export const deleteNews = payload => ({
    type: actionTypes.DELETE_NEWS_TRIGGER,
    payload
})

export const deleteNewsSuccess = payload => ({
    type: actionTypes.DELETE_NEWS_SUCCESS,
    payload
})

export const deleteNewsError = payload => ({
    type: actionTypes.DELETE_NEWS_ERROR,
    payload
})
