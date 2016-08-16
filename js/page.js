/**
 * Created by cjj
 */

function Page(count,listRow,showPageCount,divId,getData){
    var o = {};//分页对象
    o.nowPage = 1;//当前为第几页
    o.listRow = listRow;//一页显示多少条数据
    o.getData = getData;//取数据的回调函数
    o.obj = divId ;//制定在那个元素后面显示(Jquery对象)
    o.count = count;//数据总数
    //总页数
    o.totalPage = o.count % o.listRow == 0? parseInt(o.count/ o.listRow) : parseInt(o.count/ o.listRow+1);
    o.showPageCount = showPageCount;
    //显示多少个分页按钮
    //o.showPageCount = o.showPageCount < o.totalPage? o.showPageCount : o.totalPage;
    o.first = 1;//第一个显示的分页按钮是多少
    //最后一个显示的分页按钮是多少
    o.last = o.showPageCount;
    o.lastEnd =  o.totalPage < showPageCount? showPageCount: o.totalPage;
    o.initTotalPage = function(){
        o.totalPage = o.count % o.listRow == 0? parseInt(o.count/ o.listRow) : parseInt(o.count/ o.listRow+1);
    }
    o.initRow = function(){
        o.first = 1;
        o.last = o.showPageCount;
        var temp = 0;
        temp = parseInt((o.showPageCount-1)/2);
        if( (new Number(o.nowPage) + new Number(temp))> o.showPageCount){
            o.first = new Number(o.nowPage)-2;
            o.last = new Number(o.nowPage)+2;
        }
        if( o.totalPage <= o.last){
            o.last = o.totalPage;

        }
        if((new Number(o.last)-(new Number(o.first)))<(new Number(temp)*2+1)){
            o.first = 1;
        }
        console.info(JSON.stringify(o));
    }
    /**
     *  显示分页空间
     */
    o.show = function()
    {
        $(".page-div").html(" ");
        o.createPage();
        o.bindAction();
    }

    /*
     *  创建分页控件
     */
    o.createPage = function()
    {
        o.initRow();
        var html = '<nav class="pageWrap pageSyncWrap page-div">';
        //一页范围内  不显示
        if(o.last!=1){
            html +='<ul class="my-page pagination">';
            if(o.first > 1)
            {
                html +='<li><a class="page-item pre-page"><span>&laquo;</span></a></li>';
            }
            for(var i = o.first ; i <= o.last ; i++)
            {
                //拼接每一个分页数组按钮，并为其设置id
                html += "<li><a  id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>";
            }
            if(o.totalPage > o.last)
            {
                html +='<li><a class="page-item next-page"><span aria-hidden="true">&raquo;</span></a></li>';
            }
            html +='</ul>';
        }
        html += '</nav>';
        $('#'+o.obj).html(html);
        $("#page1"+o.obj).parent().addClass('active');
        //调用获取数据的回调函数
        o.getData(o.nowPage, o.listRow);
    }
    /*
     *  更新分页控件
     */
    o.updatePage = function()
    {
        o.initRow();
        //根据当前页判断重新拼接分页控件
        var html = "";
        if(o.first > 1)
        {
            html +='<li><a class="page-item pre-page"><span>&laquo;</span></a></li>';
        }
        for(var i = o.first ; i <= o.last ; i++)
        {
            //拼接每一个分页数组按钮，并为其设置id
            html += "<li><a  id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>";
        }
        if(o.totalPage > o.last)
        {
            html +='<li><a class="page-item next-page"><span aria-hidden="true">&raquo;</span></a></li>';
        }
        html +='</ul>';
        //html+="<li><a href='#' class = 'page-item next-page'><span aria-hidden='true'>&raquo;</span></a>";
        $(".my-page").html(html);
        o.bindAction();
    }
    /*
     *  更新控件颜色
     */
    o.updateColor = function(self,obj)
    {
        self.parent().removeClass('active');
        obj.parent().addClass('active');
    }

    /*
     *  更新第一页颜色
     */
    o.updateFirstColor = function(self,obj)
    {
        self.parent().removeClass('active');
        obj.parent().addClass('active');
    }


    /*
     *  删除控件
     */
    o.delete = function()
    {
        $(".page-div").html(" ");
    }
    /*
     *  为控件绑定点击事件
     */
    o.bindAction = function()
    {
        $(".pre-page").click(function(){
            o.nowPage = o.first-1;
            o.updatePage();
            o.updateColor($(this),$("#page"+ o.nowPage+o.obj));
            o.getData(o.nowPage, o.listRow);
        });

        $(".each-page").click(function(){
            o.nowPage = $(this).text();
            o.updatePage();
            o.updateColor($(this),$("#page"+ o.nowPage+o.obj));
            o.getData(o.nowPage, o.listRow);
        });

        $(".next-page").click(function(){
            o.nowPage = o.last+1;
            o.updatePage();
            o.updateColor($(this),$("#page"+ o.nowPage+o.obj));
            o.getData(o.nowPage, o.listRow);
        });
    }
    return o;
}