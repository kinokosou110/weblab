function menu(){
	var html = "";
	html +='<div class="navbar-header">';
	html +='<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#gnavi">';
      	html +='<span class="sr-only">メニュー</span>';
      	html +='<span class="icon-bar"></span>';
      	html +='<span class="icon-bar"></span>';
      	html +='<span class="icon-bar"></span>';
    	html +='</button>';
	html +='<a href="index.html" class="navbar-brand"><img src="img/test.png" alt="SugiLab" class="logo"></a>';
  	html +='</div>';

	html +='<div id="gnavi" class="collapse navbar-collapse">';
    	html +='<ul class="nav navbar-nav navbar-right"">';
      	html +='<li><a href="">先生から</a></li>';
      	html +='<li><a href="">研究内容</a></li>';
      	html +='<li><a href="">ゼミ</a></li>';
	html +='<li><a href="">メンバー</a></li>';
	html +='<li><a href="">イベント</a></li>';
    	html +='</ul>';
  	html +='</div>';
	document.write(html);
    }


function footer(){
	var html = "";
	html +='<link href="css/menu.css" rel="stylesheet" type="text/css">';
	html +='<div class="container">';
	html +='<p>杉山岳弘研究室</p>';
	html +='<p>情報棟2号館5階J2529,J2530</p>';
	html +='<p>';
	html +='<i class="fa fa-phone" aria-hidden="true">';
	html +='</i>';
	html +=' 053-478-1551 ';
	html +='</p>';
	html +='<p>';
	html +='<i class="fa fa-envelope" aria-hidden="true">';
	html +='</i>';
	html +=' info[at]sugilab.net';
	html +='</p>';
	html +='</div>';
	document.write(html);
    }
