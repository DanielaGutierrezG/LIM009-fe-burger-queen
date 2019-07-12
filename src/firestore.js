export const readData = (string, callbackTemplate) => {
    return firebase.firestore().collection(string).onSnapshot(callbackTemplate);
}