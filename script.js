



var postArray= []




document.getElementById('addPhotosInput').onchange = e => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  let date = new Date().toDateString();
  postArray.unshift({
  "url": url,
  "date": date,
  "type":"image"

  })

displayPost(postArray)

};


document.getElementById('addVideosInput').onchange = e => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  let date = new Date().toDateString();
  postArray.unshift({
  "url": url,
  "date": date,
  "type":"video"

  })

displayPost(postArray)
  // const li = ` <li> <video controls="controls" src=" ${url} " type="video/mp4" width="400px" height="200px"></video>
  //      <span><i class="fa fa-trash"></i></span>
  //  </li>`
  // $('.video-list ul').append(li);
};




const displayPost = (postArray)=>{

var post = document.createElement('div');
document.getElementById("post-list").innerHTML = ""
post.innerHTML =  postArray.map(single=>{
console.log(single);
  return (`
  
  <div class="post">
  <div class="post__top">
    <img
      class="user__avatar post__avatar"
      src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/221494955_2907353452927847_1580813490728629824_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGSNtTkzAw17isxwGy0n-r_mdDxKK7mEU2Z0PEoruYRTXSY34cI7aWDEIrnQDt7uOCEek4RYEXGvC1YSkYdr9XM&_nc_ohc=2EJ31hp9fswAX_pQLu1&_nc_ht=scontent.fdac5-1.fna&oh=00_AT_nXdAqZ2guCcZssFdVfi4dgJUe2p50lZj-wFf2cu71DA&oe=62BA488C"
      alt=""
    />

    <div class="author-name">
      <div>
        <h3>Nahid Hasan</h3>
        <p>${single.date}</p>
      </div>
    </div>

    <div class="location ms-5 mb-4">
      <span>
        <i class="fa-solid fa-location-dot"></i>
      </span>
      <span> Ghulshan 1,Dhaka</span>
    </div>
  </div>

  <!-- <div class="post__bottom">
  <p>Hi there</p>
</div> -->


${single.type ==="image"? ` <div class="post__image">
<img
  src="${single.url}"
  alt=""
/>
</div>`:`<video controls="controls" src=" ${single.url} " type="video/mp4" width="100%" ></video>`}
 

  <div class="post__options">
    <div class="post__option">
      <span class="material-icons">
        <i class="fa-solid fa-thumbs-up"></i>
      </span>
      <p>Like</p>
    </div>

    <div class="post__option">
      <span class="material-icons">
        <i class="fa-solid fa-comment"></i
      ></span>
      <p>Comment</p>
    </div>

    <div class="post__option">
      <span class="material-icons">
        <i class="fa-solid fa-share"></i>
      </span>
      <p>Share</p>
    </div>
  </div>
</div>
  
 `)


})
document.getElementById("post-list").appendChild(post)
}

