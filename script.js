
class Person {  
    
                                        // Klass är en extension av ett objekt
    constructor() {


    }

    setName(name) {
        this.name = name;

    }

    getName() {
        return this.name;
    }

};





function init() {
    console.log("init");

    let johannes = new Person();
    johannes.setName("Johannes Folkesson");

    let måns = new Person();
    måns.setName("Måns Widenborg");

    console.log("First person: " + johannes.getName());
    console.log("Second person: " + måns.getName());
}



window.addEventListener("load", init)