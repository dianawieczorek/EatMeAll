import store from "../../Redux/store";
import {POST_MEAL_TO_SERVER_URL} from "../../ServerConnection/RestCommunication/fileWithConstants";

export default (function submit() {
    console.log(store.getState().addMealToDatabaseReducer.toSerialize)
    fetch(POST_MEAL_TO_SERVER_URL, {
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
