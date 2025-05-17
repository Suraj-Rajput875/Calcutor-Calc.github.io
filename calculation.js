


function submit() {
  let value = document.getElementById('search').value.toUppercase();


  let p = document.getElementsByTagName('h1');


  p.forEach((item) => {
    let text = item.textContant;
    if (text.toUppercase().includes(value.toUppercase())) {
      item.style.display = '';

    } else {
      item.style.display = 'none';
    }
  });
}


function foren() {
  let val = document.getElementById('forenhi').value
  val = parseInt(val);
  if (isNaN(val)) {  // Check if the input is not a valid number
    document.getElementById('result').innerHTML = "Please enter a valid number.";
    return;
  }
  let f = (val * 9 / 5) + 32;

  document.getElementById('result').innerHTML = "Result... " + f + " <sup>.</sup>F";
}
function calcius() {
  let val = document.getElementById('calcius').value
  val = parseInt(val);
  if (isNaN(val)) {  // Check if the input is not a valid number
    document.getElementById('resul').innerHTML = "Please enter a valid number.";
    return;
  }
  let c = (val - 32) * 5 / 9;

  document.getElementById('resul').innerHTML = "Result... " + c + " <sup>.</sup>C";
}
function kelvin() {
  let val = document.getElementById('kelvin').value
  val = parseInt(val);
  if (isNaN(val)) {  // Check if the input is not a valid number
    document.getElementById('resu').innerHTML = "Please enter a valid number.";
    return;
  }
  let k = val + 273.15;

  document.getElementById('resu').innerHTML = "Result... " + k + " K";
}
function kelincal() {
  let val = document.getElementById('kelincal').value
  val = parseFloat(val);
  if (isNaN(val)) {  // Check if the input is not a valid number
    document.getElementById('res').innerHTML = "Please enter a valid number.";
    return;
  }
  let c = val - 273.15;

  document.getElementById('res').innerHTML = "Result... " + c.toFixed(2) + "<sup>.</sup>C   ";
}
function kainfo() {
  let val = document.getElementById('kalinfor').value
  val = parseFloat(val);
  if (isNaN(val)) {  // Check if the input is not a valid number
    document.getElementById('re').innerHTML = "Please enter a valid number.";
    return;
  }
  let f = (val - 273.15) * 9 / 5 + 32;

  document.getElementById('re').innerHTML = "Result... " + f.toFixed(2) + "<sup>.</sup>C   ";
}

function area() {
  let a = document.getElementById('base').value
  let b = document.getElementById('height').value
  a = parseInt(a);
  b = parseInt(b);
  if (isNaN(a) && (b)) {
    document.getElementById('r').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('r').innerText = "Please enter a number "
    return
  }
  let result = a * b * 1 / 2;
  document.getElementById('r').innerText = 'Result... ' + result;
}
function ab2() {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('formula').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('formula').innerText = "Please enter a number "
    return
  }
  let result = a * a + 2 * a * b + b * b;
  document.getElementById('formula').innerText = 'Result...' + result;

}
function asubb2() {
  let a = document.getElementById('asub').value;
  let b = document.getElementById('bsub').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('formul').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('formul').innerText = "Please enter a number "
    return
  }
  let result = a * a - 2 * a * b + b * b;
  document.getElementById('formul').innerText = 'Result...' + result;

}
function a2sumb2() {
  let a = document.getElementById('a2').value;
  let b = document.getElementById('b2').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('formu').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('formu').innerText = "Please enter a number "
    return
  }
  let result = a * a + b * b;
  document.getElementById('formu').innerText = 'Result...' + result;

}
function a2subb2() {
  let a = document.getElementById('a2sub2').value;
  let b = document.getElementById('b2sub2').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('form').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('form').innerText = "Please enter a number "
    return
  }
  let result = (a + b) * (a - b);
  document.getElementById('form').innerText = 'Result...' + result;
}
function a3sumb3() {
  let a = document.getElementById('a3sum').value;
  let b = document.getElementById('b3sum').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('for').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('for').innerText = "Please enter a number "
    return
  }
  let result = (a * a * a) + (b * b * b) + 3 * a * b * (a + b);
  document.getElementById('for').innerText = 'Result...' + result;

}
function a3subb3() {
  let a = document.getElementById('a3sub').value;
  let b = document.getElementById('b3sub').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('fo').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('fo').innerText = "Please enter a number "
    return
  }
  let result = (a * a * a) - (b * b * b) - 3 * a * b * (a - b);
  document.getElementById('fo').innerText = 'Result...' + result;

}








function a3mb3() {
  let a = document.getElementById('a3m').value;
  let b = document.getElementById('b3m').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('f').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('f').innerText = "Please enter a number "
    return
  }
  let result = (a + b) * (a * a - a * b + b * b);
  document.getElementById('f').innerText = 'Result...' + result;

}
function a3bb3() {
  let a = document.getElementById('a3b').value;
  let b = document.getElementById('b3b').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('fa').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('fa').innerText = "Please enter a number "
    return
  }
  let result = (a - b) * (a * a - a * b + b * b);

  document.getElementById('fa').innerText = 'Result...' + result;

}
function a2b2h() {
  let a = document.getElementById('a2h').value;
  let b = document.getElementById('b2h').value;
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) && (b)) {
    document.getElementById('fh').innerText = "Please enter a number "
    return
  } else if (isNaN(b)) {
    document.getElementById('fh').innerText = "Please enter a number "
    return
  }
  let result = 4 * a * b;
  document.getElementById('fh').innerText = 'Result...' + result;

}
function axy() {
  let a = parseFloat(document.getElementById('no').value)
  let x = parseFloat(document.getElementById('x').value)
  let y = parseFloat(document.getElementById('y').value)
  let su = x + y
  let result = Math.pow(a, su)
  document.getElementById('resultq').innerText = "Result..." + result;
}
function adeva() {
  let a = parseFloat(document.getElementById('ap').value)
  let x = parseFloat(document.getElementById('xp').value)
  let y = parseFloat(document.getElementById('yp').value)
  let ap = x - y;
  let result = Math.pow(a, ap)
  document.getElementById('resultq').innerText = "Result..." + result;
}
function ab2() {
  let a = parseFloat(document.getElementById('a2/').value)
  let b = parseFloat(document.getElementById('b2/').value)
  let x = parseFloat(document.getElementById('x2/').value)

  let ax = Math.pow(a, x)
  let bx = Math.pow(b, x)
  let result = ax * bx
  document.getElementById('resultw').innerText = "Result..." + result;
}
//id ,function is not ready

function cdsff() {
  let a = parseFloat(document.getElementById('no').value)
  let x = parseFloat(document.getElementById('x').value)
  let y = parseFloat(document.getElementById('y').value)
  let result = (Math.pow(a, s))
  document.getElementById('resultq').innerText = "Result..." + result;
}
/*
function searchByH1() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const sections = document.querySelectorAll(".section");
  let found = false;

  sections.forEach(section => {
    const title = section.querySelector("h1").textContent.toLowerCase();

    if (title.includes(searchInput)) {
      section.style.display = 'block';
     
     
     
      found = true;
    } else {
      section.style.display = "none";
    }
  });

 const message = document.getElementById("searchMessage");
     document.getElementById("searchMessage").textContent = found
    ? "Match found."
    : "No match found.";

    

}*/
function searchByH1() {
  let filter = document.getElementById('searchInput').value.toUpperCase(); // Get search input and convert to uppercase
  let items = document.querySelectorAll('.section'); // Select all items with the class 'section'
  let rightSection = document.querySelector('.right');

  // Loop through each item
  for (let i = 0; i < items.length; i++) {
    let a = items[i].getElementsByTagName('h1')[0]; // Get the <h1> inside the current item
    let value = a.innerHTML || a.innerText || a.textContent; // Get the text content of the <h1>

    // Check if the search term matches any part of the <h1> text
    if (value.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = ""; // Show the item if search matches
    } else {
      items[i].style.display = "none"; // Hide the item if search does not match
    }
  }

  // Adjust the margin of the right section based on the search
}

// Add the search event listener to the input field
document.getElementById('searchInput').addEventListener('input', searchByH1);




