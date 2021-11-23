//FUNCION QUE LLAMA AL DATA.JSON (LUEGO USADA PARA ASIGNAR EL ESTADO)

export const getData = async () => {
    try  {
        const data = await fetch('data.json')
        .then((res) => {
            return res.json()
        });
        console.log("la data es:", data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getProduct = async (id) => {
    try  {
        const data = await fetch('data.json')
        .then((res) => {
            return res.json()
        });
        console.log("la data es:", data);
        console.log("esta es mi id:" + id);
        return data;
    } catch (err) {
        console.log(err);
    }
}

// const { data } = require('../data');

// let is_ok = true;

// export const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (is_ok) {
//                 resolve(data);
//             } else {
//                 reject("Error in getData :(");
//             }
//         }, 1000);
//     });
// }