class Box3 extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    fill(rgb(128,125,120));
    super.display();
  }
}