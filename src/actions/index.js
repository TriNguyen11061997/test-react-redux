import callAPI from "./../utils/apiCaller";
// import uuidv1 from "uuid/v1";

export const getListBreed = (data) => ({
    type: 'SELECT',
    data
})

export const getListSubBreed = (data) => ({
    type: 'GET_SUBBREED',
    data
})

export const getImage = (data) => ({
    type: 'GET_IMAGE',
    data
})

export const changeBreed = (data) => ({
    type: 'CHANGE_BREED',
    data
})

export const changeSubBreed = (data) => ({
    type: 'CHANGE_SUBBREED',
    data
})


export const getListBreedRequest = () => {
    return dispatch => {
        callAPI('breeds/list', 'GET', null).then(res => {
            return dispatch(getListBreedAndImage(res.data.message))
        })
    }
}

export const changeBreedRequest = id => {
    return dispatch => {
        dispatch(changeBreed(id))
        dispatch(getImageByBreedRequest(id))
        dispatch(getListSubBreedRequest(id))
    }   
}

export const changeSubBreedRequest = (id,idsub) => {
    return dispatch => {
        dispatch(changeSubBreed(idsub))
        dispatch(getImageBySubBreedRequest(id,idsub))
    }   
}

export const getListSubBreedRequest = id => {
    return dispatch => {
        callAPI(`breed/${id}/list`, 'GET', null).then(res => {
            console.log(res)
            return dispatch(getListSubBreed(res.data.message))
        })
    }
}



export const getListBreedAndImage = data => {
    return dispatch => {
        dispatch(getListBreed(data));
        dispatch(getImageRequest())
    }
}



export const getImageRequest = () => {
    return dispatch => {
        callAPI(`breeds/image/random`, 'GET', null).then(res => {
            return dispatch(getImage(res.data.message))
        })
    }
}

export const getImageByBreedRequest = id => {
    return dispatch => {
        callAPI(`breed/${id}/images/random`, 'GET', null).then(res => {
            return dispatch(getImage(res.data.message))
        })
    }
}

export const getImageBySubBreedRequest = (id, idsub) => {
    return dispatch => {
        callAPI(`breed/${id}/${idsub}/images/random`, 'GET', null).then(res => {
            return dispatch(getImage(res.data.message))
        })
    }
}


