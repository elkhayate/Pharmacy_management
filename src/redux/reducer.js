import axios from "axios";

let initialState = {
    loading: true,
    categories: [],
    drugs: [],
    sales: [],
};


axios.get('http://localhost:8080/api/sold')
.then(res => {
    initialState.sales = res.data;
})

axios.get('http://localhost:8080/api/categories')
.then(res => {
    initialState.categories = res.data;
})

axios.get('http://localhost:8080/api/drug')
.then(res => {
    initialState.loading = false
    initialState.drugs = res.data;
})


export default function reducer(state = initialState, action) {
    return state;
}