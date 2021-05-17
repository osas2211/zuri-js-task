// conertFahrToCelsius ----- Task 1

function convertFahrToCelsius(Fahr){
    if (typeof(Number(Fahr)) !== "number" || Number.isNaN(Number(Fahr))){
        console.log(`${Fahr} is not a valid number but a/an ${typeof(Fahr)}`)
        return `${Fahr} is not a valid number but a/an ${typeof(Fahr)}`    
    }
    else{
        Fahr = Number(Fahr);
        result = (((5*Fahr) - 160)/9).toFixed(4);
        console.log(result);
        return result;
    }   
}
convertFahrToCelsius(0);


// checkYuGiOh ------ Task 2

function checkYuGiOh(n){
    let result = []
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

console.log(checkYuGiOh(30));
