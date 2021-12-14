
let notices;
const loadData = () =>{
    fetch(`http://localhost:8000/notices`)
.then(res => res.json())
.then(data => {
    return data
})
}



export default function handler(req,res){
    res.status(200).json(loadData())
}