function ChencgeSize(size,setsize,smalOrBig){
    if(smalOrBig===0){
        if(size>100)setsize(size-10)
        else alert('100 px is ths minimum size')
    }
    else{
        if(size<220)setsize(size+10)
        else alert('220 px is ths maximum size')
    }
}

export{ChencgeSize}