import jsonPlaceholder from './../apis/jsonPlaceholder'
import _ from 'lodash'

/**
export const fetchPosts = () => {

    return async (dispatch, getState) => {
        
        const response = await jsonPlaceholder.get('/posts')

        dispatch(
            {
                type: 'FETCH_POSTS',
                payload: response
            }
        )
    }    
}
 */


//SHORETEND SYNTAX
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({type: 'FETCH_POSTS', payload: response.data})
}

/**

MEMOIZED FUNCTION TO FETCH USER WITH SAME ID ONLY ONCE
export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type: 'FETCH_USER', payload: response.data})
})

**/

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type: 'FETCH_USER', payload: response.data})
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    //GET ALL THE RETRIEVED POSTS AND FIND UNIQUE USER IDS  
    const userIds = _.uniq(_.map(getState().posts, 'userId'))

    //FETCH USER FOR EACH UNIQUE ID
    userIds.forEach(id=> dispatch(fetchUser(id)))

    /**
     
    USING LODASH CHAIN
    
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
    */
}