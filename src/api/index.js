
//FUNCION QUE LLAMA AL DATA.JSON (LUEGO USADA PARA ASIGNAR EL ESTADO)

export const getData = async () => {
    try {
        const data = await fetch('/data.json')
            .then((res) => {
                return res.json()
            });
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getProduct = async (id) => {
    try {
        const data = await fetch('/data.json', {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        })
            .then((res) => {
                return res.json()
            })
        const result = data.filter(elem => elem.idCategory === parseInt(id))
        return result;
    } catch (err) {
        console.log('Error en el fetch getProduct', err);
    }
}

export const getDetail = async (id) => {
    try {
        const data = await fetch('/data.json', {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        })
            .then((res) => {
                return res.json()
            })
        const result = data.find(elem => elem.id === parseInt(id))
        return result;
    } catch (err) {
        console.log('Error en el fetch getProduct', err);
    }
}
