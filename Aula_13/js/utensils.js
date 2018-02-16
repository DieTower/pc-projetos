function $(item, contextItem) {
    if(contextItem) {
        return contextItem.querySelector(item);
    } else {
        return document.querySelector(item);
    };
}
