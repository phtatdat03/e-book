const handleAddDotPrice = (st) => {
    if(st?.includes(' ')) {
        st = st.replace(/\s+/g,'').trim()
    }
    var priceInt = parseInt(st);
    
    if(priceInt >= 1000 && priceInt <1000000) {
        //1.000 -> 999.999
        return st.slice(0, 3) + '.' + st.slice(3, 6)
    }
    else if(priceInt >= 1000000 && priceInt <10000000) {
        //1.000.000 -> 9.999.999
        return st.slice(0, 1) + '.' + st.slice(1, 4) + '.' + st.slice(4, 7)
    }
    else if(priceInt >= 10000000 && priceInt <100000000) {
        //10.000.000 -> 99.999.999
        return st.slice(0, 2) + '.' + st.slice(2, 5) + '.' + st.slice(5, 8)
    }
}

export default handleAddDotPrice