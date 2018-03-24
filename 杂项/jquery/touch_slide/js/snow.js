
  // This JavaScript code can be freely redistributed
  // as long as this copyright notice is keept unchanged.
  // This code is used on AS-IS basis and
  // you use it on your own risk. Author of this code
  // is not responsible for any damage that this
  // code may make.
  //
  // JS Snow v0.2
  // finished on 11-10-1999 23:04 in Zagreb, Croatia.
  // modified on 06-12-2005 11:20 in Zagreb, Croatia.
  //
  // Copyright 1999,2005 Altan d.o.o.
  // http://www.altan.hr/snow/index.html
  // E-mail: snow@altan.hr
  
  var no = 1; // snow number

  var dx, xp, yp;    // coordinate and position variables
  var am, stx, sty;  // amplitude and step variables
  var i, doc_width = 800, doc_height = 600;
  
  //doc_width = document.body.clientWidth;
  //doc_height = document.body.clientHeight;
  doc_width = window.innerWidth  ;
  doc_height = window.innerHeight ;

  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  
  for (i = 0; i < no; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
    if (i == 0) {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_1-2.png\" border=\"0\"></div>");
    } else {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_1-2.png\" border=\"0\"></div>");
    }
  }
	for (i = 1; i < 2; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
    if (i == 0) {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_2-2.png\" border=\"0\"></div>");
    } else {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_2-2.png\" border=\"0\"></div>");
    }
  }
  for (i = 2; i < 3; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
    if (i == 0) {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_3-2.png\" border=\"0\"></div>");
    } else {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_3-2.png\" border=\"0\"></div>");
    }
  }
  for (i = 3; i < 4; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
    if (i == 0) {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_4-2.png\" border=\"0\"></div>");
    } else {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_4-2.png\" border=\"0\"></div>");
    }
  }
  for (i = 4; i < 5; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
    if (i == 0) {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_5-2.png\" border=\"0\"></div>");
    } else {
      document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ (i+10) +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src=\"img/tubiao2_5-2.png\" border=\"0\"></div>");
    }
  }
  function snow() {
    for (i = 0; i < no; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
        doc_width = document.body.clientWidth;
        doc_height = document.body.clientHeight;
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top = yp[i];
      document.getElementById("dot"+i).style.left = xp[i] + am[i]*Math.sin(dx[i]);
    }
    setTimeout("snow()", 10);
  }
function snow01() {
    for (i = 1; i < 2; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
        doc_width = document.body.clientWidth;
        doc_height = document.body.clientHeight;
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top = yp[i];
      document.getElementById("dot"+i).style.left = xp[i] + am[i]*Math.sin(dx[i]);
    }
    setTimeout("snow01()", 10);
  }
  function snow02() {
    for (i = 2; i < 3; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
        doc_width = document.body.clientWidth;
        doc_height = document.body.clientHeight;
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top = yp[i];
      document.getElementById("dot"+i).style.left = xp[i] + am[i]*Math.sin(dx[i]);
    }
    setTimeout("snow02()", 10);
  }
  function snow03() {
    for (i = 3; i < 4; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
        doc_width = document.body.clientWidth;
        doc_height = document.body.clientHeight;
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top = yp[i];
      document.getElementById("dot"+i).style.left = xp[i] + am[i]*Math.sin(dx[i]);
    }
    setTimeout("snow03()", 10);
  }
  function snow04() {
    for (i = 4; i < 5; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
        doc_width = document.body.clientWidth;
        doc_height = document.body.clientHeight;
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top = yp[i];
      document.getElementById("dot"+i).style.left = xp[i] + am[i]*Math.sin(dx[i]);
    }
    setTimeout("snow04()", 10);
  }
  snow();
  snow01();
  snow02();
  snow03();
  snow04();
