

import db from '../utils/firebaseConfig'
import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
// export const getData = async () => {
//     try {
//         const data = await fetch('/data.json')
//             .then((res) => {
//                 return res.json()
//             });
//         return data;
//     } catch (err) {
//         console.log(err);
//     }
// }

// export const getProduct = async (id) => {
//     try {
//         const data = await fetch('/data.json', {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         })
//             .then((res) => {
//                 return res.json()
//             })
//         const result = data.filter(elem => elem.idCategory === parseInt(id))
//         return result;
//     } catch (err) {
//         console.log('Error en el fetch getProduct', err);
//     }
// }

// export const getDetail = async (id) => {
//     try {
//         const data = await fetch('/data.json', {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         })
//             .then((res) => {
//                 return res.json()
//             })
//         const result = data.find(elem => elem.id === parseInt(id))
//         return result;
//     } catch (err) {
//         console.log('Error en el fetch getProduct', err);
//     }
// }

export const getData = async (categoryID) => {
    let q;
    if (categoryID) {
        q = query(collection(db, "products"), where('categoryID', '==', categoryID));
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

export const getDetail = async (itemID) => {
    const docRef = doc(db, "products", itemID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: itemID,
            ...docSnap.data()
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
