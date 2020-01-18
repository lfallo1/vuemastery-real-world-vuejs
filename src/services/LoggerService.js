export function logError(dispatch, message, throwError){
    _logMessage(dispatch, 'error', message, throwError)
}

export function logSuccess(dispatch, message){
    _logMessage(dispatch, 'success', message)
}

function _logMessage(dispatch, type, message, throwError){
    const notification = {type: type, message: message}
    dispatch('notification/add', notification, {root: true})
    if(throwError){
        throw throwError;
    }
}