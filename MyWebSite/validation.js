function myFunction() {
    
  let name = document.getElementById('name');
  console.log(name);
  if (name == "") {
document.getElementById('name').style.borderColor = "red";       
  } else {
      document.getElementById('name').style.borderColor = "green"; 
  }
    
}