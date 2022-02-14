const products = [
    'Dell hardcore i29 200GB Laptop',
    'Iphone 1TB flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial Yoga Laptop',
    'Lg supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with laptop'
];

const searching = 'Dell';
const output = [];

for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);

/* 'Dell purple color phone with laptop'.startsWidth('Dell');true or it show flase
'Amar Sonar Bangla Ami Tomay Vhalobashi'.includes('bangla');true dibe boro soto letter hole dibe na */

for(const product of products){
    if(product.toLowerCase().includes(searching.toLocaleUpperCase())){
        // output.push(product);
    }
}
// console.log(output);
//starts width
for(const  product of products){

    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        // output.push(product);
    }
}

// console.log(output);
//ends width
for(const  product of products){

    if(product.toLowerCase().endsWith(searching.toLowerCase()) || product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}

console.log(output);