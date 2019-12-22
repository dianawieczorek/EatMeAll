import store from "../../Redux/store";

export default (function submit() {
    console.log(store.getState().addMealToDatabaseReducer.toSerialize)
    fetch("http://localhost:8080/api/v1/meal", {
        method: "POST", headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(store.getState().addMealToDatabaseReducer.toSerialize)
    })
        .then(response => response.json())
        .then((json: any) => {
            console.log(json);
        });
});
