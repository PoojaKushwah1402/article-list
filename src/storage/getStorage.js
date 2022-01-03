
const getStorage = () =>  JSON.parse(localStorage.getItem('articleListData')) || null;

export default getStorage;