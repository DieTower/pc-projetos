class Search {
    
    constructor() {
        this.app = $("#appPart1_id");
        this.events();
    }
    
    events() {
        $("#inputNum1_id", this.app).addEventListener("focus", this.focusIn.bind(this));
        //$("#inputNum1_id", this.app).addEventListener("focusout", this.focusOut.bind(this));
        $("#stockMinLessButton_id", this.app).addEventListener("click", this.less.bind(this));
        $("#stockMinPlusButton_id", this.app).addEventListener("click", this.plus.bind(this));
        $("#buttonNum1_id", this.app).addEventListener("click", this.saveData.bind(this));
    }
    
    saveData() {
        if($("#inputNum1_id", this.app).value === "") {
           alert("É necessário inserir dados!");
        } else {
           productList.add(this.get());
        }
    }
    
    focusIn() {
        this.showBar();
    }
    
    focusOut() {
        this.hiddenBar();
    }
    
    showBar() {
        $("#setStockMin_id",this.app).classList.remove("vanish");
    }
    
    hiddenBar() {
        $("#setStockMin_id",this.app).classList.add("vanish");
    }
    
    less() {
        if($("#stockMin_id", this.app).innerHTML !== "0") {
            $("#stockMin_id", this.app).innerHTML = this.get().stockMin - 1;
        }
    }
    
    plus() {
        $("#stockMin_id", this.app).innerHTML = this.get().stockMin + 1;
    }
    
    get() {
        return {
            Name: $("#inputNum1_id", this.app).value,
            stockMin: parseInt($("#stockMin_id", this.app).innerHTML),
            Stock: 0
        };
    }
    
}
