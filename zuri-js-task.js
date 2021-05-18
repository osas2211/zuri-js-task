// conertFahrToCelsius ----- Task 1

function convertFahrToCelsius(Fahr){
    if (typeof(Number(Fahr)) !== "number" || Number.isNaN(Number(Fahr))){
        error_msg = `${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof(Fahr)}`;
        console.log(error_msg)
        return error_msg;    
    }
    else{
        Fahr = Number(Fahr);
        result = Number((((5*Fahr) - 160)/9).toFixed(4));
        console.log(result)
        return result;
    }   
}



// checkYuGiOh ------ Task 2

function checkYuGiOh(n){
    if (typeof(Number(n)) !== "number" || Number.isNaN(Number(n))){
        error_msg = `invalid parameter: ${JSON.stringify(n)}`
        console.log(error_msg)
        return error_msg
    }
    else {
        let result = []
        n = Number(n)
        for (let count = 1; count <= n; count += 1){
            if (count % 2 == 0 && count % 3 == 0 && count % 5 ==0){
                result.push("yu-gi-oh");
            }
            else if (count % 2 == 0 && count % 3 == 0){
                result.push("yu-gi");
            }
            else if (count % 2 == 0 && count % 5 == 0){
                result.push("yu-oh");
            }
            else if (count % 3 == 0 && count % 5 == 0){
                result.push("gi-oh");
            }
            else if (count % 2 == 0){
                result.push("yu");
            }
            else if (count % 3 == 0){
                result.push("gi");
            }
            else if (count % 5 == 0){
                result.push("oh");
            }
            else{
                result.push(count);
            }
        }
        console.log(result)
        return result;
    }
    
}


