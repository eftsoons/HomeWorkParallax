const scrollBarMinTop = 53;
const scrollBarMaxTop = 292;

const headerMenuSvgColor = document.querySelector(".header-menu-svg-color");
const mainSun = document.querySelector(".main-sun");
const mainSquareTop = document.querySelector(".main-square-top");
const page1Text = document.querySelector(".page1-text");
const page2Text = document.querySelector(".page2-text");
const scrollBar = document.querySelector(".scrollbar");

const MaxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", (e) => {
  if (e.target == document) {
    const scroll = window.pageYOffset;

    SetMainMenuSvg(mainSun, scroll, MaxScroll);

    mainSquareTop.style.top = `${GetResultDivisions(
      scroll,
      MaxScroll,
      -351,
      -663
    )}px`;

    scrollBar.style.top = `${GetResultDivisions(
      scroll,
      MaxScroll,
      scrollBarMaxTop,
      scrollBarMinTop
    )}px`;

    page1Text.style.opacity = GetResultDivisions(scroll, MaxScroll, 0, 1);
    page1Text.style.top = `${GetResultDivisions(scroll, MaxScroll, 40, 50)}%`;
    page1Text.style.transform = `translate(-50%, -${GetResultDivisions(
      scroll,
      MaxScroll,
      40,
      50
    )}%)`;

    page2Text.style.opacity = GetResultDivisions(scroll, MaxScroll, 1, 0);
    page2Text.style.top = `${GetResultDivisions(scroll, MaxScroll, 60, 80)}%`;
    page2Text.style.transform = `translate(-50%, -${GetResultDivisions(
      scroll,
      MaxScroll,
      60,
      80
    )}%)`;

    headerMenuSvgColor.style.fill = GetColorRGBScroll(
      scroll,
      MaxScroll,
      [45, 59, 93]
    );
  }
});

function SetMainMenuSvg(element, scroll, MaxScroll) {
  //переделать
  mainSun.style.width = `${GetResultDivisions(scroll, MaxScroll, 2153, 196)}px`;
  mainSun.style.height = `${GetResultDivisions(
    scroll,
    MaxScroll,
    2153,
    196
  )}px`;
  mainSun.style.top = `${GetResultDivisions(scroll, MaxScroll, 50, 34)}%`;
  mainSun.style.right = `${GetResultDivisions(scroll, MaxScroll, 50, 9.4375)}%`;
  mainSun.style.transform = `translate(${GetResultDivisions(
    scroll,
    MaxScroll,
    50,
    9.4375
  )}%, -${GetResultDivisions(scroll, MaxScroll, 50, 34)}%)`;
  //   mainSun.style.transform = `scale(${GetResultDivisions(
  //     scroll,
  //     MaxScroll,
  //     10,
  //     1
  //   )})`;
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

function GetColorRGBScroll(scroll, MaxScroll, MinColorRGB) {
  const color = `rgb(${MinColorRGB.reduce((prev, curr, index) => {
    const color = GetResultDivisions(scroll, MaxScroll, 255, curr);

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
