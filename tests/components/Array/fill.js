import utils from "./utils.js";

//Array.prototype.fill
const SUBJECT = "Array.prototype.fill";

const fill = () => {

    const $fill = document.createElement("div");
    $fill.id = "array-fill";

    $fill.appendChild(utils.setHeader(SUBJECT, "h3"));
    
    return $fill;
};


export default fill;