process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var row ='';
    var output = '';
    for(var i = 0; i<a; i++){
        row += '*';
    }
    for(var j = 0; j<b; j++){
        output += row+'\n';
    }
    console.log(output);
});