function fitsInOneBox(boxes) {
  return boxes
    .sort((boxA, boxB) => boxA.l - boxB.l)
    .every(
      (box, idx) =>
        idx === 0 ||
        (box.l > boxes[idx - 1].l &&
          box.w > boxes[idx - 1].w &&
          box.h > boxes[idx - 1].h)
    );
}
