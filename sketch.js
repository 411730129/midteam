let points = [[3,4], [6,3], [8, 0],[8,-3],[6,-5],[7,-5],[8,-6],[-8,-6],[-12,-1],[-12,2],[-10,2],[-10,0],[-7,-3],[-6,-3],[-6,-1],[-4,3],[-2,+4],[3,4]]; //list資料(鯨魚)
function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
	ctx = canvas.getContext('2d');
	ctx.lineWidth =5;
	ctx.lineCap = 'round'
	//-----

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  //gradientLine(ctx,350,220,330,180, 'black', 'blue')
  gradientLine(ctx,0,112.5,150,37.5, 'red', 'green')
	
	
  background(255);
  // scale(50)
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  textSize(60)  //文字大小
  fill(247, 217, 106);  //設定顏色
  text("教科系",-40,0)  //顯示文字
  scale(1, -1);  //上下翻轉
    
  //設定漸層顏色
  //let c1 = color(112,123,245);
  //let c2 = color(91,212,159);
    
  for (let i = 0; i < points.length-1; i++) {
      
  //let t = map (i,0,point.length-2,0,1);
  //let c = lerpColor(c1,c2,t);
  //stroke(c)
  line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
    
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  }
}