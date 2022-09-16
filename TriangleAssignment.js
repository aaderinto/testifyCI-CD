//Triangles Classification
const side1 = 1;
const side2 = 10;
const side3 = 10; 

if(side1 === side2 && side1 === side3){
    console.log("The triangle is an Equilateral triangle.")
}else if((side1 === side2) || (side1 === side3) || (side2 === side3)){
    console.log("The triangle is an Isoceles triangle.")
}else{
    console.log("The triangle is a Scalene triangle.")
}
