

interface ListDefaultState {
    count: number;
}


const listDefaultState: ListDefaultState = {
    count: 0
}

export default (state = listDefaultState, action) => {
    switch (action.type) {



        
        default:
            return state;
    }
}