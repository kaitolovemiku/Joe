export const testEmpty = (value) => {
    if (value === undefined || value === null || value === "") {
        return true;
    }
    return false;
}