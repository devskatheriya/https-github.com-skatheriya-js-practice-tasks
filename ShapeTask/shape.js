class Shape {
    perimeter() {
        console.log("Perimeter");
    }
    area() {
        console.log("Area");
    }

}

class Rectangle extends Shape {
    constructor(length, width) {
        super()
        this._length = length;
        this._width = width;
    }
    area() {

        return this._length * this._width;
    }
    perimeter() {

        return 2 * (this._length + this._width);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super()
        this._radius = radius;
    }
    area() {
        return Math.PI * this._radius * this._radius;
    }
    perimeter() {
        return 2 * Math.PI * this._radius;
    }
}
class Triangle extends Shape {
    constructor(side_a, side_b, side_c) {
        super()
        this._side_a = side_a;
        this._side_b = side_b;
        this._side_c = side_c;
    }
    area() {
        let s = (this._side_a + this._side_b + this._side_c);
        let area = (s * (s - this._side_a) * (s - this._side_b) * (s - this._side_c));
        return Math.sqrt(area);
    }
    perimeter() {
        return (this._side_a + this._side_b + this._side_c);
    }
}
class Square extends Shape {
    constructor(side) {
        super()
        this._side = side;
    }
    area() {
        return this._side * this._side;
    }
    perimeter() {
        return 4 * this._side;
    }
}

function askShape() {
    do {
        var shape_choice = askShapeChoice();
        switch (shape_choice) {
            case 1:
                do {
                    circle();
                    do {
                        var repeat_choice = prompt("You want to continue with same Shape.\nChoose [Y/N]", 'Y');
                    } while (!(repeat_choice.toLowerCase() == 'y' || repeat_choice.toLowerCase() == 'n' || alert("Valid Input only")))
                } while (!(repeat_choice.toLowerCase() == 'n'))
                break;

            case 2:
                do {
                    rectangle();
                    do {
                        var repeat_choice = prompt("You want to continue with same Shape.\nChoose [Y/N]", 'Y');
                    } while (!(repeat_choice.toLowerCase() == 'y' || repeat_choice.toLowerCase() == 'n' || alert("Valid Input only")))
                } while (!(repeat_choice.toLowerCase() == 'n'))
                break;
            case 3:
                do {
                    triangle();
                    do {
                        var repeat_choice = prompt("You want to continue with same Shape.\nChoose [Y/N]", 'Y');
                    } while (!(repeat_choice.toLowerCase() == 'y' || repeat_choice.toLowerCase() == 'n' || alert("Valid Input only")))
                } while (!(repeat_choice.toLowerCase() == 'n'))
                break;
            case 4:
                do {
                    square();
                    do {
                        var repeat_choice = prompt("You want to continue with same Shape.\nChoose [Y/N]", 'Y');
                    } while (!(repeat_choice.toLowerCase() == 'y' || repeat_choice.toLowerCase() == 'n' || alert("Valid Input only")))
                } while (!(repeat_choice.toLowerCase() == 'n'))
                break;
            default:
                alert("Wrong input please Choose Right one");
                break;
        }
        do {
            var choice = prompt("You want to continue with Another Shape.\n Choose [Y/N]", 'Y');
        } while (!(choice.toLowerCase() == 'y' || choice.toLowerCase() == 'n' || alert("Valid Input only")))
    } while (!(choice.toLowerCase() == 'n'))
}


function circle() {
    do {
        var radius = +prompt("Enter Radius of circle", 1);
    } while (((radius < 1) && (alert("only positive no. allowed") || true)) 
                || (isNaN(radius) && (alert("Only no. allowed") || true)))
                
    let newCircle = new Circle(radius);
    let sub_choice = askChoice();
    switch (sub_choice) {
        case 1: alert("Area : " + newCircle.area().toFixed(2));
            // document.getElementById("shapeId").innerText="Circle";
            // document.getElementById("shapeId").style.visibility="visible";
            // document.getElementById("choiceId").innerText="Area";
            // document.getElementById("choiceId").style.visibility="visible";
            // document.getElementById("choiceValueId").innerText=newCircle.area().toFixed(2);
            // document.getElementById("choiceValueId").style.visibility="visible";
            return;
        case 2: alert("Perimeter : " + newCircle.perimeter().toFixed(2));
            return;
    }
}
function rectangle() {
    do {
        var length = +prompt("Enter Length of Rectangle", 1);
    } while (((length < 1) && (alert("only positive no. allowed") || true)) 
    || (isNaN(length) && (alert("Only no. allowed") || true)))
    
    do {
        var width = +prompt("Enter Width of Rectangle", 1);
    } while (((width < 1) && (alert("only positive no. allowed") || true)) 
    || (isNaN(width) && (alert("Only no. allowed") || true)))

    let newRectangle = new Rectangle(length, width);
    let sub_choice = askChoice();
    switch (sub_choice) {
        case 1: alert("Area : " + newRectangle.area().toFixed(2));
            break;
        case 2: alert("Perimeter : " + newRectangle.perimeter().toFixed(2));
            break;
    }
}
function square() {
    do {
        var side = +prompt("Enter Side of Square", 1);
    } while (((side < 1) && (alert("only positive no. allowed") || true)) 
    || (isNaN(side) && (alert("Only no. allowed") || true)))

    var newSquare = new Square(side);
    let sub_choice = askChoice();
    switch (sub_choice) {
        case 1: alert("Area : " + newSquare.area().toFixed(2));
            break;
        case 2: alert("Perimeter : " + newSquare.perimeter().toFixed(2));
            break;
    }
}
function triangle() {

    do {
        var side_a = +prompt("Enter side a of Triangle", 1);
    } while (((side_a < 1) && (alert("only positive no. allowed") || true)) 
    || (isNaN(side_a) && (alert("Only no. allowed") || true)))
    
    do {
        var side_b = +prompt("Enter side b of Triangle", 1);
    } while (((side_b < 1) && (alert("only positive no. allowed") || true)) 
    || (isNaN(side_b) && (alert("Only no. allowed") || true)))
    
    do {
        var side_c = +prompt("Enter side c of Triangle", 1);
    } while (((side_c < 1) && (alert("only positive no. allowed") || true)) 
    || (isNaN(side_c) && (alert("Only no. allowed") || true)))

    let newTriangle = new Triangle(side_a, side_b, side_c);
    let sub_choice = askChoice();
    switch (sub_choice) {
        case 1: alert("Area : " + newTriangle.area().toFixed(2));
            break;
        case 2: alert("Perimeter : " + newTriangle.perimeter().toFixed(2));
            break;
    }
}

function askChoice() {
    do {
        var sub_choice = +prompt("Enter your choice\n 1. Area\n 2. Perimeter");
        if (sub_choice == 1 || sub_choice == 2) {
            return sub_choice;
        } else {
            alert("Wrong Choice\nPlease Choose valid option");
            sub_choice = false;
        }
    } while (!sub_choice);
}
function askShapeChoice() {
    do {
        var sub_choice = +prompt("Enter your choice\n 1. Circle\n 2. Rectangle\n 3. Triangle\n 4. Square");
        if (sub_choice == 1 || sub_choice == 2 || sub_choice == 3 || sub_choice == 4) {
            return sub_choice;
        } else {
            alert("Wrong Choice\nPlease Choose valid option");
            sub_choice = false;
        }
    } while (!sub_choice);
}
askShape();
