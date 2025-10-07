const scrollBarMinTop = 53;
const scrollBarMaxTop = 292;

const headerMenuSvgColor = document.querySelector(".header-menu-svg-color");
const mainSunCircle = document.querySelector(".main-sun-curcle");
const mainSunSquare1 = document.querySelector(".main-sun-square-1");
const mainSunSquare2 = document.querySelector(".main-sun-square-2");
const mainSunSquare3 = document.querySelector(".main-sun-square-3");
const mainSquareTop = document.querySelector(".main-square-top");
const page1Text = document.querySelector(".page1-text");
const page2Text = document.querySelector(".page2-text");
const scrollBar = document.querySelector(".scrollbar");
const mainTriangle1 = document.querySelector(".main-triangle-1");
const mainTriangle2 = document.querySelector(".main-triangle-2");
const mainTriangle3 = document.querySelector(".main-triangle-3");
const mainTriangle4 = document.querySelector(".main-triangle-4");
const mainCircleBlue = document.querySelector(".main-circle-blue");
const mainImgMario = document.querySelector(".main-img-mario");
const mainImgDragon = document.querySelector(".main-img-dragon");

let MaxScroll =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("resize", () => {
  MaxScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
});

window.addEventListener("scroll", (e) => {
  if (e.target == document) {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    funbodyBackgroundColor(scroll);
    funheaderMenuSvgColor(scroll);
    funMainMenuSvg(scroll);
    funmainSquareTop(scroll);
    funscrollBar(scroll);
    funpage1Text(scroll);
    funpage2Text(scroll);
    funmainTriangle1(scroll);
    funmainTriangle2(scroll);
    funmainTriangle3(scroll);
    funmainTriangle4(scroll);
    funmainCircleBlue(scroll);
    funmainImgMario(scroll);
    funmainImgDragon(scroll);
  }
});

function funmainImgDragon(scroll) {
  mainImgDragon.style.left = `calc(100% - ${GetResultDivisions(
    scroll,
    MaxScroll,
    708,
    0
  )}px)`;
}

function funmainImgMario(scroll) {
  mainImgMario.style.top = `${GetResultDivisions(scroll, MaxScroll, 4, 100)}%`;
}

function funmainCircleBlue(scroll) {
  mainCircleBlue.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    452,
    304
  )}px`;

  mainCircleBlue.style.left = `${GetResultDivisions(
    scroll,
    MaxScroll,
    900,
    862
  )}px`;
}

function funmainTriangle4(scroll) {
  mainTriangle4.style.right = `${GetResultDivisions(
    scroll,
    MaxScroll,
    80,
    -934
  )}px`;
}

function funmainTriangle3(scroll) {
  mainTriangle3.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    1036,
    468
  )}px`;
}

function funmainTriangle2(scroll) {
  mainTriangle2.style.left = `calc(50% - 703px/2 - ${GetResultDivisions(
    scroll,
    MaxScroll,
    1146.48,
    346.48
  )}px)`;
}

function funmainTriangle1(scroll) {
  mainTriangle1.style.left = `calc(50% - 1157.68px/2 - ${GetResultDivisions(
    scroll,
    MaxScroll,
    1782.16,
    929.16
  )}px)`;
}

function funpage2Text(scroll) {
  page2Text.style.opacity = GetResultDivisions(scroll, MaxScroll, 1, 0);
  page2Text.style.top = `${GetResultDivisions(scroll, MaxScroll, 50, 80)}%`;
  page2Text.style.transform = `translate(-50%, -${GetResultDivisions(
    scroll,
    MaxScroll,
    50,
    80
  )}%)`;
}

function funpage1Text(scroll) {
  page1Text.style.opacity = GetResultDivisions(scroll, MaxScroll, 0, 1);
  page1Text.style.top = `${GetResultDivisions(scroll, MaxScroll, 40, 50)}%`;
  page1Text.style.transform = `translate(-50%, -${GetResultDivisions(
    scroll,
    MaxScroll,
    40,
    50
  )}%)`;
}

function funscrollBar(scroll) {
  scrollBar.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    scrollBarMaxTop,
    scrollBarMinTop
  )}px`;
}

function funbodyBackgroundColor(scroll) {
  document.body.style.background = GetColorRGBScroll(
    scroll,
    MaxScroll,
    [255, 255, 255],
    [255, 171, 201]
  );
}

function funheaderMenuSvgColor(scroll) {
  headerMenuSvgColor.style.fill = GetColorRGBScroll(
    scroll,
    MaxScroll,
    [45, 59, 93],
    [255, 255, 255]
  );
}

function funMainMenuSvg(scroll) {
  mainSunCircle.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -478,
    384.31
  )}px`;

  mainSunCircle.style.left = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -263,
    1282.53
  )}px`;

  mainSunCircle.style.width = `${GetResultDivisions(
    scroll,
    MaxScroll,
    2453,
    196
  )}px`;

  mainSunCircle.style.height = `${GetResultDivisions(
    scroll,
    MaxScroll,
    2453,
    196
  )}px`;

  mainSunSquare1.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -224.59,
    407.43
  )}px`;

  mainSunSquare1.style.left = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -1707,
    1151
  )}px`;

  mainSunSquare1.style.width = `${GetResultDivisions(
    scroll,
    MaxScroll,
    790,
    72
  )}px`;

  mainSunSquare1.style.height = `${GetResultDivisions(
    scroll,
    MaxScroll,
    343,
    30
  )}px`;

  mainSunSquare2.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -1678.81,
    275
  )}px`;

  mainSunSquare2.style.left = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -833.21,
    1230.57
  )}px`;

  mainSunSquare2.style.width = `${GetResultDivisions(
    scroll,
    MaxScroll,
    785,
    69
  )}px`;

  mainSunSquare2.style.height = `${GetResultDivisions(
    scroll,
    MaxScroll,
    1033,
    92
  )}px`;

  mainSunSquare3.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -1650.67,
    277.56
  )}px`;

  mainSunSquare3.style.left = `${GetResultDivisions(
    scroll,
    MaxScroll,
    1011.55,
    1398.56
  )}px`;

  mainSunSquare3.style.width = `${GetResultDivisions(
    scroll,
    MaxScroll,
    274,
    24
  )}px`;

  mainSunSquare3.style.height = `${GetResultDivisions(
    scroll,
    MaxScroll,
    785,
    71
  )}px`;
}

function funmainSquareTop(scroll) {
  mainSquareTop.style.top = `${GetResultDivisions(
    scroll,
    MaxScroll,
    -351,
    -663
  )}px`;
}

//интересно, у фигмы это встроенный функционал?
let ScrollBarYInfo = null;

function OnScrollBarDown(e) {
  const clientY = "clientY" in e ? e.clientY : e.changedTouches[0].clientY;
  const TypeClick = "clientY" in e ? "web" : "phone";
  const scrollBarTop = scrollBar.getBoundingClientRect().top;

  ScrollBarYInfo = {
    clientY: clientY,
    startClientY: scrollBarTop,
  };

  if (TypeClick == "web") {
    scrollBar.addEventListener("mousemove", OnScrollBarMove, {
      passive: false,
    });
    scrollBar.addEventListener("mouseup", OnScrollBarUp);
  } else {
    scrollBar.addEventListener("touchmove", OnScrollBarMove, {
      passive: false,
    });
    scrollBar.addEventListener("touchend", OnScrollBarUp);
  }

  e.preventDefault();
}

function OnScrollBarMove(e) {
  if (ScrollBarYInfo) {
    const clientY = "clientY" in e ? e.clientY : e.changedTouches[0].clientY;

    const deltaY = ScrollBarYInfo.clientY - clientY;
    const newHeight = ScrollBarYInfo.startClientY - deltaY;

    const clampedHeight = Math.max(
      scrollBarMinTop,
      Math.min(scrollBarMaxTop, newHeight)
    );

    const clampedHeightScroll = GetResultDivisions(
      clampedHeight - scrollBarMinTop,
      scrollBarMaxTop - scrollBarMinTop,
      MaxScroll,
      0
    );

    scrollBar.style.top = `${clampedHeight}px`;

    window.scrollTo({
      top: clampedHeightScroll,
    });

    e.preventDefault();
  }
}

function OnScrollBarUp(e) {
  const clientY = "clientY" in e ? e.clientY : e.changedTouches[0].clientY;
  const scrollBarTop = scrollBar.getBoundingClientRect().top;

  const moduleDeltaY = Math.abs(ScrollBarYInfo.clientY - clientY);
  const directionScroll = scrollBarTop <= scrollBarMaxTop / 2;

  if (moduleDeltaY < 20) {
    if (!directionScroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: MaxScroll,
        behavior: "smooth",
      });
    }
  } else {
    if (scrollBarTop != scrollBarMaxTop && scrollBarTop != scrollBarMinTop) {
      if (directionScroll) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: MaxScroll,
          behavior: "smooth",
        });
      }
    }
  }

  ScrollBarYInfo = null;
}

function GetColorRGBScroll(scroll, MaxScroll, MinColorRGB, MaxColorRGB) {
  const color = `rgb(${MinColorRGB.reduce((prev, curr, index) => {
    const color = GetResultDivisions(
      scroll,
      MaxScroll,
      MaxColorRGB[index],
      curr
    );

    return (prev += `${index != 0 ? "," : ""}${color}`);
  }, "")})`;

  return color;
}

function GetResultDivisions(x1, x2, to, from) {
  const progress = Math.min(Math.max(x1 / x2, 0), 1);

  return from + (to - from) * progress;
}

/*
function GetResultDivisions(x1, x2, to, from) {
  if (to > from) {
    return Math.max((x1 / x2) * to, from);
  } else {
    return Math.max((1 - x1 / x2) * from, to);
  }
}

мой вариант, но вариант выше подсказала нейронка
*/
