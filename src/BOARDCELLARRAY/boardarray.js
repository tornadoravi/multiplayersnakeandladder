
import './boardarray.css'
let boxArr=[] 
let row = 10
let coloum = 10
let  oddOrEven=0
for(let boardCell=(row*coloum); boardCell>0;boardCell-=row){
    if((oddOrEven++)%2===0){
        for(let i=boardCell;i>=(boardCell-(coloum-1));i--){
            boxArr.push({
                id:`boxId${i}`,
                className:`boxs cell${i}`,
                cellNUM:i,
                from:i,
                splCel:'',
                to:'',
                icon:'',
                players:{}
            }
            )
        }
}
else{
    for(let j=(boardCell-(coloum-1));j<=boardCell;j++){
        (boxArr.push({
            id:`boxId${j}`,
                className:`boxs cell${j}`,
                cellNUM:j,
                from:j,
                splCel:'',
                to:'',
                icon:'',
                players:{}
            
        }))
    }
}
}
const snakeLadder=[
    {from:1,to:1,icon:'🏁'},
    {from:83,to:40,icon:'🐍to 40'},
    {from:17,to:5,icon:'🐍to 5'},
    {from:56,to:21,icon:'🐍to 21'},
    {from:75,to:49,icon:'🐍to 49'},
    {from:99,to:7,icon:'🐍to 7'},
    {from:6,to:13,icon:'🎠to 13'},
    {from:24,to:45,icon:'🎠to 45'},
    {from:36,to:80,icon:'🎠to 80'},
    {from:70,to:95,icon:'🎠to 95'},
    {from:44,to:73,icon:'🎠to 74'},
    {from:100,to:100,icon:'🏆'}

]



snakeLadder.forEach(snakeLadderElement => {
    boxArr.forEach(cellElement => {
        if(cellElement.cellNUM===snakeLadderElement.from){
            cellElement.icon=snakeLadderElement.icon
            cellElement.to=snakeLadderElement.to
        }
    });
});
 
export default boxArr