function find_multiple_3(values){
    let resultats = [];
    values.forEach(function(value) 
    { 
        if(value%3==0)
        {
            resultats.push(value)
        }
    }
    );
    console.log(resultats.join("-"))
}
const values = [80, 41, 25, 76, 85, 100, 26, 42, 12, 90, 25, 78, 14, 14, 65, 10, 55, 17, 94, 83, 35, 44, 29, 86, 48, 95];
find_multiple_3(values)