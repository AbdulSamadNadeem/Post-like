let like = document.getElementById('like')
let laugh = document.getElementById('laugh')
let love = document.getElementById('love')
let counts = document.getElementById('counts')
let number = 1
function colorchangelike(){

   like.style.color="#3498db"
   laugh.style.color="#000"
   love.style.color="#000"

    
    
        counts.innerHTML=`Reacts:${number}`

}
function colorchangelaugh(){

   laugh.style.color="#f1c40f"
   like.style.color="#000"
   love.style.color="#000"
    

   
        counts.innerHTML=`Reacts:${number}`

   
}
function colorchangelove(){

   love.style.color="#c0392b"
   laugh.style.color="#000"
    like.style.color="#000"
    

  counts.innerHTML=`Reacts:${number}`


}
