class SaveChanges {
    
    constructor() {
        this.app = $("#saveEditions_id");
        this.events();
    }
    
    events() {
        $("#buttonRight_id", this.app).addEventListener("click",this.saveCancel.bind(this));
        $("#buttonSave_id", this.app).addEventListener("click",this.saveData.bind(this));
    }
    
    show() {
        this.app.classList.remove("vanish");
    }
    
    hidden() {
        this.app.classList.add("vanish");
    }
    
    saveCancel() {
        console.log("Cancel");
        this.hidden();
    }
    
    saveData() {
        console.log("Save");
    }
    
}