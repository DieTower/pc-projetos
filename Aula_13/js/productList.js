class ProductList {
    
    constructor() {
        this.search = new Search();
        this.saveChanges = new SaveChanges();
        this.items = this.loadData();
        this.render();
    }
    
    loadData() {
        let listItems = [];
        const localData = localStorage.getItem("productList");
        if(localData) {
            listItems = JSON.parse(localData);
        }
        return listItems.map(item => new Product(item));
    }
    
    saveData() {
        localStorage.setItem("productList",JSON.stringify(this.items));
    }
    
    add(item) {
        this.items.push(item);
        this.saveData();
    }
    
    remove(indexName) {
        this.items.splice(indexName,1);
    }
    
    render() {
        
    }
    
    events() {
        
    }
    
}