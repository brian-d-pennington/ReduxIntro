console.clear();

// people dropping off a form (action creator)

const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    };
};

const createClaim = (name, amountToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountToCollect: amountToCollect
        }
    };
};

// Reducers

const claimsHistory = (listOfClaimsToUpdate = [], action) => {
    if (action.type === 'CREATE_CLAIM')  {
        return [...listOfClaimsToUpdate, action.payload];
    }
    return listOfClaimsToUpdate;
};