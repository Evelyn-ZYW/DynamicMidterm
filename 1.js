
function reset_everything() {
  document.querySelector("#homepage").style.display = "none";
  document.querySelector(".type1").style.display = "none";
  document.querySelector(".type2").style.display = "none";
  document.querySelector(".type3").style.display = "none";
  document.querySelector(".type4").style.display = "none";
  document.querySelector(".type5").style.display = "none";
  document.querySelector(".type6").style.display = "none";
  document.querySelector(".type7").style.display = "none";
  document.querySelector(".type8").style.display = "none";
}
function reset_home() {
  reset_everything();
  document.querySelector("#homepage").style.display = "flex";
}

function nav_modes(n) {
  if (n === 1) {
    reset_everything();
    document.querySelector(".type1").style.display = "flex";
  } else {
    reset_everything();
    StartType_B();
  }
}
function display_correct(n) {
  if (n === 1) {
    document.querySelector("#feedback_A").innerHTML = feed_back[0].text1;
    document.querySelector(".siginal_A").src = feed_back[0].img1;
  } else {
    document.querySelector("#feedback_B").innerHTML = feed_back[0].text1;
    document.querySelector(".siginal_B").src = feed_back[0].img1;
  }
}
function display_wrong(n) {
  if (n === 1) {
    document.querySelector("#feedback_A").innerHTML = feed_back[1].text1;
    document.querySelector(".siginal_A").src = feed_back[1].img1;
  } else {
    document.querySelector("#feedback_B").innerHTML = feed_back[1].text1;
    document.querySelector(".siginal_B").src = feed_back[1].img1;
  }
}

function CheckAnswer1(n) {
  reset_everything();
  document.querySelector(".type6").style.display = "flex";
  document.querySelector("#explain_A").innerHTML = t1_qs[t1_ind].correctexplain;
  if (n === t1_qs[t1_ind].answer) {
    display_correct(1);
  } else {
    display_wrong(1);
  }
}
function CheckAnswer2(n) {
  reset_everything();
  document.querySelector(".type6").style.display = "flex";
  document.querySelector("#explain_A").innerHTML = t2_qs[t2_ind].correctexplain;
  if (n === t2_qs[t2_ind].answer) {
    display_correct(1);
  } else {
    display_wrong(1);
  }
  t2_ind++;
}
function CheckAnswer3(n) {
  reset_everything();
  document.querySelector(".type6").style.display = "flex";
  document.querySelector("#explain_A").innerHTML = t3_qs[t3_ind].correctexplain;
  if (n === t3_qs[t3_ind].answer) {
    display_correct(1);
  } else {
    display_wrong(1);
  }
  t3_ind++;
}
function CheckAnswer4(n) {
  reset_everything();
  document.querySelector(".type8").style.display = "flex";
  document.querySelector("#explain_B").innerHTML = t4_qs[t4_ind].correctexplain;
  if (n === t4_qs[t4_ind].answer) {
    display_correct(2);
  } else {
    display_wrong(2);
  }
  t4_ind++;
}

function CheckAnswer5(n) {
  reset_everything();
  document.querySelector(".type8").style.display = "flex";
  document.querySelector("#explain_B").innerHTML = t5_qs[t5_ind].correctexplain;
  if (n === t5_qs[t5_ind].answer) {
    display_correct(2);
  } else {
    display_wrong(2);
  }
  t5_ind++;
}

function StartType_A() {
  if (t2_ind >= 2) {
    StartType3();
  } else {
    reset_everything();
    document.querySelector(".type2").style.display = "flex";
    document.querySelector("#t2_img1").src = t2_qs[t2_ind].img1;
    document.querySelector("#t2_txt1").innerHTML = t2_qs[t2_ind].text1;
    document.querySelector("#t2_img2").src = t2_qs[t2_ind].img2;
  }
}

function StartType3() {
  if (t3_ind >= 1) {
    congratz();
  } else {
    reset_everything();
    document.querySelector(".type3").style.display = "flex";
    document.querySelector("#match1").src = t3_qs[t3_ind].img1;
    document.querySelector("#t3_txt1").innerHTML = t3_qs[t3_ind].text1;
    document.querySelector("#match2").src = t3_qs[t3_ind].img2;
  }
}
function StartType_B() {
  if (t4_ind >= 2) {
    StartType5();
  } else {
    reset_everything();
    document.querySelector(".type4").style.display = "flex";
    document.querySelector("#t4_txt1").innerHTML = t4_qs[t4_ind].text1;
    document.querySelector("#t4_txt2").innerHTML = t4_qs[t4_ind].text2;
    document.querySelector("#t4_img1").src = t4_qs[t4_ind].img1;
    document.querySelector("#t4_txt3").innerHTML = t4_qs[t4_ind].text3;
  }
}

function StartType5() {
  if (t5_ind >= 2) {
    congratz();
  } else {
    reset_everything();
    document.querySelector(".type5").style.display = "flex";
    document.querySelector("#t5_txt1").innerHTML = t5_qs[t5_ind].text1;
    document.querySelector("#t5_txt2").innerHTML = t5_qs[t5_ind].text2;
    document.querySelector("#t5_img1").src = t5_qs[t5_ind].img1;
    document.querySelector("#t5_txt3").innerHTML = t5_qs[t5_ind].text3;
  }
}

function congratz() {
  reset_everything();
  document.querySelector(".type7").style.display = "flex";
  if (t3_ind != 0) {
    document.querySelector("#t7_txt1").innerHTML = end_quiz[0].text1;
  } else {
    document.querySelector("#t7_txt1").innerHTML = end_quiz[1].text1;
  }
}
