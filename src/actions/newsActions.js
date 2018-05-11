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

// Fetch single news story
export const fetchSingleNews = payload => ({
    type: actionTypes.FETCH_SINGLE_NEWS_TRIGGER,
    payload
})

export const fetchSingleNewsSuccess = payload => ({
    type: actionTypes.FETCH_SINGLE_NEWS_SUCCESS,
    payload
})

export const fetchSingleNewsError = payload => ({
    type: actionTypes.FETCH_SINGLE_NEWS_ERROR,
    payload
})

export const clearSingleNews = () => ({
    type: actionTypes.CLEAR_SINGLE_NEWS
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
