
const getinDateFormate = date => {
    let newDate = date.slice(3,6)+date.slice(0,3)+date.slice(6)
    return new Date(newDate)
}

const sortDate = data => {

    data.sort((a, b)=>{
        let a1 = getinDateFormate(a.publishDate)
        let b1 = getinDateFormate(b.publishDate)
        if ( a1 < b1 ){
            return 1;
          }
          if ( a1 > b1 ){
            return -1;
          }
          return 0;
    })

    console.log(data,'data')

    return data;

}

export default sortDate;