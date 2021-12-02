
import db from '../utils/firebaseConfig'
import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";

//me trae todo los productos
export const getData = async (categoryID) => {
    let q;
    if (categoryID) {
        q = query(collection(db, "products"), where('idCategory', '==', categoryID));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}
//me trae un solo item
export const getDetail = async (itemID) => {
    const docRef = doc(db, "products", itemID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: itemID,
            ...docSnap.data()
        }
    } else {
        console.log("No existe ese documento");
    }
}
