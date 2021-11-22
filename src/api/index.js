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