export const readData = (string, property, callbackTemplate ) => {
    return firebase.firestore().collection(string).orderBy(property).onSnapshot(callbackTemplate);
}

export const databaseOrder = (objOrder) => {
    return firebase.firestore().collection("order").add(objOrder);
}



