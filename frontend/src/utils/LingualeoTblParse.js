var arr = $(".tbll").find("tr").map((i, tr) => {
    return $(tr).find("td").map((i, td) => {
        return td.innerText
    })
}).toArray();

var arr2 = arr.map(el => {
    return {
        infinitive: el[0],
        pastSimple: el[1],
        pastParticiple: el[2],
        translation: el[3],
    };
});
var obj = {};

arr2.forEach(el => {
    obj[el.infinitive] = el;
});

JSON.stringify(obj, null, 4);