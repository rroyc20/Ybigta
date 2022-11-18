function create_pTag(){
  let tagArea = document.getElementById('tagArea');
  let new_pTag = document.createElement('p');
  
  new_pTag.setAttribute('class', 'pTag');
  new_pTag.innerHTML = "더 궁금한 게 있으면 해당 링크로: https://m.blog.naver.com/qls1021/221827185687";
  
  tagArea.appendChild(new_pTag);
  
  pTagCount++;
}
