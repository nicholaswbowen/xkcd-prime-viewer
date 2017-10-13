export const REQUEST_COMICS = 'REQUEST_COMICS';
export const RECEIVE_COMICS = 'RECEIVE_COMICS';
export const FAILED_COMICS_RETRIEVAL = 'FAILED_COMICS_RETRIEVAL';

export const requestComic = xkcd => ({
    type: REQUEST_COMICS,
    xkcd
});

export const failedComic = xkcd => ({
    type: FAILED_COMICS_RETRIEVAL,
    xkcd
});

export const receiveComic = (xkcd, json) => ({
    type: RECEIVE_COMICS,
    xkcd,
    comic: json,
    receivedAt: Date.now()
});

const fetchComic = xkcd => dispatch => {
    dispatch(requestComic(xkcd))
    return fetch(`http://dynamic.xkcd.com/api-0/jsonp/comic/${xkcd}`)
        .then(response => response.json())
        .then(json => dispatch(receiveComic(xkcd, json)))
};

const shouldFetchComic = (state, xkcd) => {
    const comic = state.comicsByxkcd[xkcd];
    if (!comic) {
        return true;
    }
    if (comic.isFetching) {
        return false
    }
    return comic.didInvalidate;
};

export const fetchComicIfNeeded = xkcd => (dispatch, getState) => {
    if (shouldFetchComic(getState(), xkcd)) {
        return dispatch(fetchComic(xkcd))
    }
};