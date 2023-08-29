

const iterate = (num) => {
    
    for(let i = 0; i < num; i++){
        console.log("Numero:", i+1);
    }
}

iterate(process.argv[2])