
const ModifyFavourite = (index) => {

        const articleList = JSON.parse(localStorage.getItem('articleListData'));
        if(!articleList){
            return null
        }
        const listData = articleList.listData;
        const favList = articleList.favList;
        favList[index] = !favList[index]
        //console.log(JSON.stringify({listData,favList}),'set single')
        localStorage.setItem('articleListData',JSON.stringify({listData,favList}));
        return true
}

export default ModifyFavourite;