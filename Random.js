function getParam(sParamName){
    var Params = location.search.substring(1).split("&"); // отсекаем "?" и вносим переменные и их значения в массив
    var variable = "";
    for (var i = 0; i < Params.length; i++){ // пробегаем весь массив
        if (Params[i].split("=")[0] == sParamName){ // если это искомая переменная
        // если значение параметра задано, то возвращаем его
            if (Params[i].split("=").length > 1) variable = Params[i].split("=")[1];
            return variable;
        }
    }
    return "";
}
