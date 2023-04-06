function addListItem() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById    ("image").value;
    var url = document.getElementById("url").value;
  
    var li = document.createElement("li");
    var img = document.createElement("img");
    var content = document.createElement("div");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    var a = document.createElement("a");
  
    img.src = image;
    img.alt = title;
    content.classList.add("content");
    h2.textContent = title;
    p.textContent = description;
    a.textContent = "Link";
    a.href = url;
  
    content.appendChild(h2);
    content.appendChild(p);
    li.appendChild(img);
    li.appendChild(content);
    li.appendChild(a);
  
    document.getElementById("list").appendChild(li);
  
    document.getElementById("form").reset();
  }
  
  function toggleView() {
    var listContainer = document.getElementById("list-container");
    var viewButton = document.getElementById("toggle-view");
  
    if (listContainer.classList.contains("read-only")) {
      listContainer.classList.remove("read-only");
      viewButton.textContent = "Toggle View";
    } else {
      listContainer.classList.add("read-only");
      viewButton.textContent = "Edit List";
    }
  }
  
  