


/**
 * 创建分页对象
 *@param count 数据总数
 *@param listRow 每页显示的数据数量
 *@param showPageCount 显示多少个分页按钮
 *@param obj 在哪个对象后创建分页控件
 *@getData getData 点击按钮事件后的回调函数，用于得到数据并修改界面UI
 *
 * */
function Page(count,listRow,showPageCount,obj,getData){
    var o = {};//分页对象
    o.nowPage = 1;//当前为第几页
    o.listRow = listRow;//一页显示多少条数据
    o.getData = getData;//取数据的回调函数
    o.obj = obj;//制定在那个元素后面显示(Jquery对象)
    o.count = count;//数据总数
    //总页数
    o.totalPage = o.count% o.listRow == 0? parseInt(o.count/ o.listRow) : parseInt(o.count/ o.listRow+1);
    //显示多少个分页按钮
    o.showPageCount = o.showPageCount < o.totalPage? o.showPageCount : o.totalPage;
    o.first = 1;//第一个显示的分页按钮是多少
    //最后一个显示的分页按钮是多少
    o.last = o.totalPage > showPageCount?showPageCount: o.totalPage;
}


/*
 *  创建分页控件
 */
o.createPage = function()
{
    //拼接分页控件
    var html = "<div class = 'page-div'><div class = 'my-page'>";
    for(var i = 0 ; i < o.showPageCount ; i++)
    {
        //拼接每一个分页数组按钮，并为其设置id
        html += "<a href='#' id=page"+(i+1)+" class = 'page-item each-page'>"+(i+1)+"</a>";
    }
    //拼接下一页按钮
    html += "<a href='#' class = 'page-item next-page'>>></a></div></div>";
    //在指定的对象后创建控件
    o.obj.after(html);
    $("#page1").css("background-color","gray");
    //调用获取数据的回调函数
    o.getData(o.nowPage, o.listRow);
}

/*
 *  为控件绑定点击事件
 */
o.bindAction = function()
{
    $(".pre-page").click(function(){
        o.nowPage = parseInt(o.nowPage) - 1;
        if(o.nowPage < (o.totalPage-o.showPageCount/2) && o.first > 1)
        {
            o.first = parseInt(o.first) - 1;
            o.last = parseInt(o.last) - 1;
        }
        o.updatePage();
        o.updateColor($(this),$("#page"+ o.nowPage));
        o.getData(o.nowPage, o.listRow);
    });

    $(".each-page").click(function(){
        o.nowPage = $(this).text();
        if(o.nowPage >= o.showPageCount/2+1 && o.nowPage <= (o.totalPage - o.showPageCount/2))
        {
            if(o.showPageCount%2 == 0)
            {
                o.first =  parseInt(o.nowPage)-parseInt(o.showPageCount/2-1);
                o.last =  parseInt(o.nowPage)+parseInt(o.showPageCount/2);
            }
            else
            {
                o.first =  parseInt(o.nowPage)-parseInt(o.showPageCount/2);
                o.last =  parseInt(o.nowPage)+parseInt(o.showPageCount/2);
            }
        }
        else if(o.nowPage < o.showPageCount/2)
        {
            o.first =  1;
            o.last =  o.showPageCount;
        }
        else if(o.nowPage > (o.totalPage - o.showPageCount/2))
        {
            o.first = parseInt(o.totalPage) - parseInt(o.showPageCount)+1;
            o.last = parseInt(o.totalPage);
        }
        o.updatePage();
        o.updateColor($(this),$("#page"+ o.nowPage));
        o.getData(o.nowPage, o.listRow);
    });

    $(".next-page").click(function(){
        o.nowPage = parseInt(o.nowPage) + 1;
        if(o.last < o.totalPage && o.nowPage > o.showPageCount/2+1)
        {
            o.first = parseInt(o.first) + 1;
            o.last = parseInt(o.last) + 1;
        }
        o.updatePage();
        o.updateColor($(this),$("#page"+ o.nowPage));
        o.getData(o.nowPage, o.listRow);
    });
}

/*
 *  更新分页控件
 */
o.updatePage = function()
{
    //根据当前页判断重新拼接分页控件
    var html = "";
    if(o.nowPage != 1)
    {
        html += "<a href='#' class = 'page-item pre-page'><<</a>";
    }
    for(var i = o.first ; i <= o.last ; i++)
    {
        html += "<a href='#' id=page"+i+" class = 'page-item each-page'>"+i+"</a>";
    }
    if(o.nowPage != o.totalPage)
    {
        html+="<a href='#' class = 'page-item next-page'>>></a>";
    }
    $(".my-page").html(html);
    o.bindAction();
}


/**
 *  显示分页空间
 */
o.show = function()
{
    o.delete();
    o.createPage();
    o.bindAction();
}
/*
 *  更新控件颜色
 */
o.updateColor = function(self,obj)
{
    //将所有的分页按钮背景颜色设为白色
    self.parent().find('a').css("background-color","white");
    //将选中的按钮背景设为灰色
    obj.css("background-color","gray");
}
/*
 *  删除控件
 */
o.delete = function()
{
    $(".page-div").html(" ");
}



