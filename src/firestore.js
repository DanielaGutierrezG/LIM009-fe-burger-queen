export const readData = (string, callbackTemplate) => {
    return firebase.firestore().collection(string).onSnapshot(callbackTemplate);
}

export const databaseOrder = (objOrder) => {
    return firebase.firestore().collection("order").add(objOrder);
}