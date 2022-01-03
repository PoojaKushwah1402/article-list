
const defaultList = {
    listData : [],
    favList : []
}

const setStorage = data => {

    if(data.listData && data.listData.length) {

        localStorage.setItem('articleListData',JSON.stringify(data));
        // console.log(JSON.stringify(data),'set all')

    }else{

        const articleList = JSON.parse(localStorage.getItem('articleListData')) || defaultList;
        const listData = articleList.listData;
        const favList = articleList.favList;
        listData.unshift(data);
        favList.unshift(false);
        // console.log(JSON.stringify({listData,favList}),'set single')
        localStorage.setItem('articleListData',JSON.stringify({listData,favList}));
    }
}

export default setStorage;