class Product {
    
    constructor(items) {
        const app = $("#product_id");
        
        this.name = items.name;
        this.stockMin = items.stockMin;
        this.pStock = items.pStock;
        
    }
    
    render(element) {
        this.el = element;
        
        element.innerHTML = $("#htmlElement").innerHTML
        .replace(/{{productName}}/g,this.name)
        .replace(/{{stockMin}}/g,this.stockMin)
        .replace(/{{stock}}/g,this.pStock);
        
        this.warning();
        this.events();
    }
    
    events() {
        $("#productState_id", this.el).addEventListener("click", this.showOrNotEdit.bind(this));
        $("#productEditLess_id", this.el).addEventListener("click", this.stockLess.bind(this));
        $("#productEditPlus_id", this.el).addEventListener("click", this.stockPlus.bind(this));
        $("#productEditRemove_id", this.el).addEventListener("click", this.deleteElement.bind(this));
    }
    
    showOrNotEdit() {
        $("#productEdit_id", this.el).classList.toggle("vanish");
    }
    
    stockLess() {
        if($("#pStock_id", this.el).innerHTML !== "0") {
            $("#pStock_id", this.el).innerHTML = parseInt($("#pStock_id", this.el).innerHTML) - 1;
            this.warning();
        } else {
            
        }
    }
    
    stockPlus() {
        $("#pStock_id", this.el).innerHTML = parseInt($("#pStock_id", this.el).innerHTML) + 1;
        this.warning();
    }
    
    deleteElement() {
        this.el.remove();
    }
    
    warning() {
        if(parseInt($("#pStock_id", this.el).innerHTML) < parseInt($("#pStockMin_id", this.el).innerHTML)) {
            $("#productState_id", this.el).classList.add("backgroundRed");
        } else {
            $("#productState_id", this.el).classList.remove("backgroundRed");
        }
    }
    
}
