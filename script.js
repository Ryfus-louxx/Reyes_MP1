function big(idname){
  if (idname=="chili"){
      document.getElementById("chili").src = "chiligarlicbg.jpg";
      document.getElementById("chilitext").textContent = "Chili Garlic 185g";
  } else if (idname=="coco") {
      document.getElementById("coco").src = "cocobg.jpg";
      document.getElementById("cocotext").textContent = "Coco Jam 420g";
  }
}

function small(idname){
  if (idname=="chili"){
      document.getElementById("chili").src = "chiligarlicsml.jpg";
      document.getElementById("chilitext").textContent = "Chili Garlic 100g";
  } else if (idname=="coco") {
      document.getElementById("coco").src = "cocosml.jpg";
      document.getElementById("cocotext").textContent = "Coco Jam 280g";
  }
}
