const use = (val) => {
    let myVal = val;

    return [myVal, newVal => {
        myVal = newVal;
    }]
}



const [v1, setV1] = use(10)

setV1(15);
console.log(v1)


