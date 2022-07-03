class Page {
    constructor(text){
        this.text = text;
    }
    print(){
        console.log(this.text);
    }
}
/* Class page has a memeber property or object text. 
    The print function acts on the text by having a method that displays it on the string.
    */
class Notebook {
    constructor(){
        this.pages = [];
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages){
            page.print();
        }

    }
}

/* The notebook class the data or object is the array of page instances. Addpage function acts on the data first by instanstiating it as a variable page.
Then adding it toa list pages. Print( displas the pages on the screen) 
*/
var JsNotes = new Notebook();
JsNotes.addPage("Js can be tricky if you do not understand coercion");
JsNotes.addPage("But is pthe best in functional programming and arguably in Objected Oriented programming");

JsNotes.print();
