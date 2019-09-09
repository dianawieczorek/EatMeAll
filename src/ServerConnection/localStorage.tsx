export const loadMeals = () => {
    try {
        const serializedMeals = localStorage.getItem('weekMeals');
        if (serializedMeals === null) {
            return undefined;
        }
        return JSON.parse(serializedMeals);
    } catch (err) {
        return undefined;
    }
};

export const loadUsers = () => {
    try {
        const serializedUsers= localStorage.getItem('users');
        if (serializedUsers === null) {
            return [];
        }
        return JSON.parse(serializedUsers);
    } catch (err) {
        return [];
    }
};

export const  saveWeekMeals = (state:any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('weekMeals', serializedState);
    }catch (err) {
        // ignore write errors
    }
}

export const  saveUsers= (state:any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('users', serializedState);
    }catch (err) {
        // ignore write errors
    }
}