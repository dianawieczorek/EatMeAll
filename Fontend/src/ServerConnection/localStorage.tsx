import Member from "../Redux/Model/Member";

const MEMBERS = 'members';

export const  saveMembers = (members:Array<Member>) => {
    try {
        const serializedState = JSON.stringify(members);
        localStorage.setItem(MEMBERS, serializedState);
    }catch (err) {
        // ignore write errors
    }
};

export const loadMembers = () => {
    try {
        let serializedMeals = localStorage.getItem(MEMBERS);
        if (serializedMeals === null) {
            saveMembers ( [new Member('default')]);
            serializedMeals = localStorage.getItem(MEMBERS);
        }
        return JSON.parse(serializedMeals!);
    } catch (err) {

    }
};

