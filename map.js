// Higher order function
// Used when you want to do summation or multiplications or another to the all of the element

function mapExampleOne(){
    let name = "ahmed-NAYEL";
    let swappingLetter = name.split("").map((ele)=>{
        // conditional operator
            return ele == ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
    }).join("");
    console.log(swappingLetter)
}

function mapExampleTwo(){
    let arrOFNumbers = [11,12,-13,14,-5];
    let invertNumber = arrOFNumbers.map((ele)=>{
        return -ele;
    })
    console.log(invertNumber)
}

function mapExampleThree(){
    let name = "A7m3d";
    name = name.split("").map((ele) => {
       return isNaN(parseInt(ele)) ? ele : "";
    }).join("");

    console.log(name);
}
mapExampleThree()
