// from https://stackoverflow.com/questions/37533023/how-to-make-a-list-of-headingsh2-elements-from-current-page-and-print-them-int


var //Array with all the elements with tag main. It is a collection
      mainEl = document.getElementsByTagName("main"),
      //Because we only have one main tag, from the previous
      //collection we chose the first elemnt
      //From that element we create a collection with all the h2 inside
      headingsEls = mainEl[0].getElementsByTagName("h2"),
      //collection of elements with "aside" tag
      asideEl = document.getElementsByTagName("aside"),
      //We create the ul that wil hold the list
      ulEl = document.createElement("ul")

  //Go throw the h2 collection and for each element we create a new li element,
  //we pass to it the text content and we put it on the ul
  for(var i = 0; i < headingsEls.length; i++){
    var liEl = document.createElement("li")
    liEl.textContent = headingsEls[i].textContent
    ulEl.appendChild(liEl)
  }

  //the new ul with the list is appended!
  asideEl[0].appendChild(ulEl)
