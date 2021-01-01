class canvas {
    constructor(width, height, id){
        this.el = document.getElementById(id);
        this.width = width;
        this.height = height;
        this.ctx = this.el.getContext("2d");
        
        this.create= () => {
            this.el.width = this.width;
            this.el.height = this.height;
            this.clear = () => this.ctx.clearRect(0, 0, this.width, this.height)
            
        }
        
        this.drawPix = (row, column, size) => {
            this.ctx.fillRect(row * size, column * size, size, size);
        }
    }
}

class domElement{
    constructor(class_name){
        this.elements = [];
        
        this.create = ()=>{
            let dom_elements = document.getElementsByClassName(class_name);
            let i = 0;
            let len = dom_elements.length;
            for(i; i< len; i++){
                this.elements.push(dom_elements[i])
            }
        }
    }
}

const inputs_select = new domElement("select");
inputs_select.create();

const option2 = {
    size: 1,
    width: 500,
    height: 500
}


class hash_table{
    constructor(){
    
        this.table= {};
        
        this.chars= {
            left: ["A", "a"],
            top: ["B", "b"],
            right: ["C", "c"]
        };
        
        this.keys_array = [];
        
        this.hashFunction = (left, top, right)=>{
            let res="";
    
            let states = [[left, "A", "a"], [top,"B", "b"], [right, "C", "c"]];
            states.forEach(state=> state[0] ? res+= state[1] : res+= state[2]);
    
            return res  
        }
        
        this.init = () => {
            this.chars.left.forEach(state_left =>{
                this.chars.top.forEach(state_top => {
                    this.chars.right.forEach(state_right => {
                        Object.assign(this.table, {[state_left+state_top+state_right] : false})
                    })
                })
            });
            
            for(let keys in this.table){
                this.keys_array.push(keys)
            }
        }
    }
}

const canvas1 = new canvas(option2.width, option2.height, "canvas2");
canvas1.create()
canvas1.ctx.fillStyle="#000";


let hash_table0 = new hash_table();
hash_table0.init();


inputs_select.elements.forEach((input, i) => {
    input.addEventListener("click", ()=>{
        let key_table = hash_table0.keys_array[i];
        if(hash_table0.table[key_table]){
            hash_table0.table[key_table] = false;
            input.style.background = "#fff"
        } else {
            hash_table0.table[key_table] = true;
            input.style.background = "#504040"
        }
    })
})

const initMatrix = (width, size)=>{
    let res = [[]] ;
    
    for(let i = 0; i< width / size; i++){
        res[0].push(false);
    }
    res[0][width/size/2] = true;
    return res
}

const printPixel = (x, row_n1, table) =>{
    
    let hashing;
    
    if(x === 0){
        hashing = hash_table0.hashFunction(false, row_n1[x], row_n1[x+1]);
    } else if (x == row_n1.length - 1){
        hashing = hash_table0.hashFunction(row_n1[x-1], row_n1[x], false);
    } else {
        hashing = hash_table0.hashFunction(row_n1[x-1], row_n1[x], row_n1[x+1]);
    }
    return table[hashing] 
}

const execute = (rule) =>{

let row = initMatrix(option2.width, option2.size);

canvas1.clear()
    
    for(let y = 1; y< option2.height/option2.size; y++){
        row[y] =[];
        for(let i = 0; i < row[y-1].length; i++){
            row[y].push(printPixel(i, row[y-1], rule));
        }
        
        row[y].forEach((pixel, x) => pixel ? canvas1.drawPix(x, y, option2.size,) : null)
    }
}
document.getElementById("button").addEventListener("click", ()=>{
    execute(hash_table0.table)
});

M.Tooltip.init(document.querySelectorAll('.tooltipped'));
