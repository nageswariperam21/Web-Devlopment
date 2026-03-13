function checkFreezing(temp){
    if (temp <=0){
        return "Freezing temperature";
    }else{
        return "above freezing";
    }
    }
    console.log(checkFreezing(-4));
