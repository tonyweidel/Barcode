const Sort = {

    selection: function(list){
        let min =0;

        for(let x=0;x<list.length-1;x++){
            min=x;
            for(let y=x;y<list.length;y++){
                if(list[y]<list[min]){
                    min=y;
                }
            }
            if(min != x){
                let temp = list[x];
                list[x] = list[min];
                list[min] = temp;
            }
        }
        return list;
    },

    insertion: function(list){
        let j;
        for(let i=1;i<list.length;i++){
            j=i;
            while(j>0 && list[j-1]>list[j]){
                //swap j and j-1
                let temp = list[j-1];
                list[j-1]=list[j];
                list[j] = temp;
                j--;
            }
        }
        return list;
    },
    merge: function(thelist){
        function mergesort(list){
            if(list.length <2){
                return list;
            }
            let mid = Math.floor(list.length/2);
            let left = list.slice(0,mid);
            let right = list.slice(mid,list.length);

            return combine(mergesort(left),mergesort(right));
        }
        function combine(left,right){
            let result = [];
            let x=0,y=0;
            let xlen =left.length;
            let ylen =right.length;

            while(xlen > x && ylen > y){
                if(left[x] <= right[y]){
                    result[x+y]= left[x];
                    x++;
                }
                else{
                    result[x+y] = right[y];
                    y++;
                }
            }
            while(xlen > x){
                result[x+y]= left[x];
                x++;
            }
            while(ylen > y){
                result[x+y] = right[y];
                    y++;

            }
            return result;
        }
        return mergesort(thelist);
    }
}
module.exports = Sort;
