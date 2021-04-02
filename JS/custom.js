const img1 = 'https://images.unsplash.com/photo-1589483232057-5362d8fbc3bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlYWRsb2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const img2 = 'https://images.unsplash.com/photo-1610981920916-3115700bb684?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlYWRsb2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const img3 = 'https://images.unsplash.com/photo-1589483232280-128d0e9f7641?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlYWRsb2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const img4 = 'https://images.unsplash.com/photo-1542044815535-fcb7cec787a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlYWRsb2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
const img5 = 'https://images.unsplash.com/photo-1601935111781-c9083ad09928?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlYWRsb2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
const img6 = 'https://images.unsplash.com/photo-1601935033900-059813f9abfc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlYWRsb2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';


function updateImage(element) {
  if (element.src === img1) {
    element.src = img2;
  } else {
    element.src = img1;
  }
}


function updateGuyImage(element) {
  if (element.src === img3) {
    element.src = img4;
  } else {
    element.src = img3;
  }
}

function updateGuyImage2(element) {
    if (element.src === img5) {
      element.src = img6;
    } else {
      element.src = img5;
    }
  }
