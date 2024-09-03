export const handleAdd = (payload) => ({
    type: 'HANDLE_ADD',
    payload,
});

export const handleReduce = (payload) => ({
    type: 'HANDLE_REDUCE',
    payload,
});

export const handleReset = () => ({
    type: 'HANDLE_RESET',
});

export const handleTheme = (payload) => ({
    type: 'HANDLE_THEME',
    payload,
});
