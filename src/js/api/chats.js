import db from "../db/firestore";

const extractSnapshotData = (snapshot) =>
  snapshot.docs.map(doc =>  ({id: doc.id, ...doc.data()}))


export const fetchChats = () => {
  return db
    .collection('Chats')
    .get()
    .then(extractSnapshotData)
}
