function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function () {
    stroke(233);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branchA = function () {
    let dirVector = p5.Vector.sub(this.end, this.begin);
    dirVector.rotate(PI / 6);
    dirVector.mult(0.85);
    let newEnd = p5.Vector.add(this.end, dirVector);
    let b = new Branch(this.end, newEnd);
    return b;
  };

  this.branchB = function () {
    let dirVector = p5.Vector.sub(this.end, this.begin);
    dirVector.rotate(-PI / 6);
    dirVector.mult(0.85);
    let newEnd = p5.Vector.add(this.end, dirVector);
    let b = new Branch(this.end, newEnd);
    return b;
  };
}
