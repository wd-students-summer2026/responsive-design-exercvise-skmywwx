// I didn't do the extra credit

//From Course JQuery example
//content change
function changeContent1(){
  $("article.CurryCooking p").text("It seems very delicious. I should try it out sometimes!");
}

//image change
function changeImage1(){
  $("article.CurryCooking img").attr("src", "Images/Curry.jpg");
  //$("img#Curry").attr("src", "Images/Curry.jpg");
}

//From Course JQuery example
//content return
function returnContent1(){
  $("article.CurryCooking p").text("Its required materials include: potatoes, carrots, onions, and chicken leg");
}

//image return
function returnImage1(){
  $("article.CurryCooking img").attr("src", "Images/CurryPrep.jpg");
}

//From Course JQuery example
//animate H   ungryFace
function animateHungryFace() {
  //capture the position
  const startWidth = $("img#HungryFace").width();
  const startHeight = $("img#HungryFace").height();
  const startTop = $("img#HungryFace").position().top;
  const startLeft = $("img#HungryFace").position().left;
//set absolute position
  $("img#HungryFace").css({
    position: "absolute",
    width: startWidth, //original width
    height: startHeight, //original height
    top: startTop, // original top position
    left: startLeft, // original left position
  });

  $("img#HungryFace").animate(
    {
      top: "180px",
      left: "580px",
    },
    3000,
  );
}

//From Course JQuery example
$(() => {
  //$("img#Curry").mouseover(changeImage1);

 // Change content when triggering mouseover
  $("article.CurryCooking").mouseover(changeContent1);
  // Change image when triggering mouseover
  $("article.CurryCooking img").mouseover(changeImage1);

  // Return to the original content when triggering mouseout
  $("article.CurryCooking").mouseout(returnContent1);
  // Return to the original image when triggering mouseout
  $("article.CurryCooking img").mouseout(returnImage1);

  //Animate img#HungryFace
  $("button").click(animateHungryFace);
});