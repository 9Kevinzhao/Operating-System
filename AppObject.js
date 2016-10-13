function App(n,m,s){

    //Declare your instance variables here.
    this.name = n
    this.memory = m
    this.state = s
    //Declare the instance function open here.
    this.open = function(){
      this.state="active"


    };
    //Declare the instance function sleep here.
    this.close = function()
  {
    if(s=="active")
    {
      this.state="sleep"
    }
    m=m/2
  }


    //Declare the instance function active here.
    this.active = function()
    {
      if (s=="sleep")
      {
        this.state="active"
      }
      m=m*2
    }


    //Declare the instance function close here.
      this.close = function()
      {
        if (!s==null)
        {
          this.state="null"
        }
        m=0
      }



}

//Use the constructor to create 4 App objects below.
var iPhone = new App(iPhone,16,active)
var iPad = new App(iPad,32,active)
var iwatch = new App(iwatch,8,active)
var Mac = new App(Mac,128,active)


//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var appList=[iPhone,iPad,iwatch,Mac]
