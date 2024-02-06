const validate = (name,value)=>{
    let error = "";
    switch(name){
        case "lenguage":
            if (!value.trim()) {
                error = "debe introducir un lenguaje de programacion";
            }
            break;
        case "framework":
            if (!value.trim()) {
                error = "debe introducir un framework";
            }
            break;
    }
}
export default validate;