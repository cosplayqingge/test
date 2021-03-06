/*
* @Author: TomChen
* @Date:   2019-02-26 18:15:35
* @Last Modified by:   TomChen
* @Last Modified time: 2019-02-26 19:41:36
*/
//顶部
;(function($){
	//加载一次HTML共同
	function loadHtmlOnce($elem,cb){
		var loadUrl = $elem.data('load');
		if(!loadUrl) return;
		var isLoaded = $elem.data('isLoaded',true);
		if(!isLoaded) return;
		$.getJSON(loadUrl,function(data){
			typeof cb == 'function' && cb($elem,data);
		})
	}


	var $menuDropdown = $('.nav-side .dropdown');
	$menuDropdown.dropdown({js:true,mode:'slideDownUp',delay:200});
	$menuDropdown.on('dropdown-show',function(ev){
			loadHtmlOnce($(this),buildMenuLayer);
		});
	function buildMenuLayer($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<li><a href="'+data[i].url+'" class="menu-item">'+data[i].name+'</a></li>'
		}
		//模拟网络延迟
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000)
	}
	//dropdown暴露接口测试   不能有之前设置的 ‘click’事件
	// $('button').on('click',function(){
	// 	$('.dropdown').dropdown('show')
	// })

 //搜索框
  var $search = $('.header .search');
  $search.on('getData',function(ev,data){
  		var $elem = $(this);
  		// console.log(':::',data)//拿到data数组
  		var html = getSearchLayerHtml(data,5)
		$search.search('appendHtml',html);
		if(html == ''){
			// this.hideLayer();
			$search.search('hideLayer');
			}else{
			// this.showLayer();
			$search.search('showLayer');
		}
  });
   $search.on('getNoData',function(){
   		$search.search('appendHtml','');
   		$search.search('hideLayer');
   });
   function getSearchLayerHtml(data,Maxnum){
   		//1.根据数据生成html
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			if(i >= Maxnum) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html;
   }
  $search.search();

  //分类导航
  var $categoryDropdown = $('.category .dropdown');
  $categoryDropdown.on('dropdown-show',function(ev){
		// var $elem = $(this);
		// var loadUrl = $elem.data('load');
		// if(!loadUrl) return;
		// var isLoaded = $elem.data('isLoaded',true);
		// if(!isLoaded) return;
		// var $layer = $elem.find('.dropdown-layer')
		// $.getJSON(loadUrl,function(data){
		// 	// console.log(data)
		// 	var html = '';
		// 	for(var i = 0;i<data.length;i++){
		// 		html += '<dl class="category-details"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">';
		// 		for(var j = 0;j<data[i].items.length;j++){
		// 			html += '<a href="#" class="link">'+data[i].items[j]+'</a>';
		// 		}
		// 		html += '</dd></dl>';
		// 	}
		// 	//模拟网络延迟
		// 	setTimeout(function(){
		// 		$layer.html(html);
		// 		$elem.data('isLoaded',true);
		// 	},1000)		
		// })
		loadHtmlOnce($(this),buildCategoryLayer)
	});
  function buildCategoryLayer($elem,data){
  	var html = '';
	for(var i = 0;i<data.length;i++){
	html += '<dl class="category-details"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">';
	for(var j = 0;j<data[i].items.length;j++){
			html += '<a href="#" class="link">'+data[i].items[j]+'</a>';
			}
			html += '</dd></dl>';
		}
	//模拟网络延迟
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000)		
	}
  $categoryDropdown.dropdown({
  	delay:200,
  	js:true,
  	mode:"slideLeftRinght"
  });

})(jQuery);