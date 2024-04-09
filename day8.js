function processData(input) {
    let data = input.split('\n');
    let queries = parseInt(data.shift());
    let userDataInput = data.splice(0, queries);
    let lookup = data;
    let userDataDict = {}
    
    for(let i=0; i<queries; i++){
        info = userDataInput[i].split(' ');
        let name = info[0];
        let number = info[1];
        userDataDict[name]=number;
    }
    
    let output = lookup.map((name)=>{
        if(userDataDict[name]){
            return `${name}=${userDataDict[name]}`;
        } else {
            return 'Not found';   
        }
    })
    
    console.log(output.join('\n'))
    //Enter your code here
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
