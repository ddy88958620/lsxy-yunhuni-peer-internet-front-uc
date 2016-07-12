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
    o.showPageCount = o.showPageCount < o.totalPage? o.showPageCount : o.totalPage;
    o.first = 1;//第一个显示的分页按钮是多少
    //最后一个显示的分页按钮是多少
    o.last = o.totalPage > showPageCount? showPageCount: o.totalPage;
    o.lastEnd =  o.totalPage < showPageCount? showPageCount: o.totalPage;

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
     *  创建分页控件
     */
    o.createPage = function()
    {
        var html = '<nav class="pageWrap pageSyncWrap page-div">';
        //一页范围内  不显示
        if(o.showPageCount>1){
            html +='<ul class="my-page pagination">';
            if(o.nowPage != 1)
            {
                html +='<li><a class="page-item pre-page"><span>&laquo;</span></a></li>';
            }
            for(var i = 0 ; i < o.showPageCount ; i++)
            {
                //拼接每一个分页数组按钮，并为其设置id
                html += "<li><a  id=page"+(i+1)+o.obj+" class = 'page-item each-page'>"+(i+1)+"</a></li>";
            }
            if(o.nowPage != o.totalPage)
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

        //根据当前页判断重新拼接分页控件
        var html = "";
        if(o.first != 1)
        {
            html += '<li><a class="page-item pre-page"><span>&laquo;</span></a></li>';
        }
        for(var i = o.first ; i <= o.last ; i++)
        {

            html += "<li><a id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>";
        }

        if(o.last != o.totalPage)
        {
            html+="<li><a class = 'page-item next-page'><span aria-hidden='true'>&raquo;</span></a>";
        }
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

            //o.nowPage = parseInt(o.nowPage) - 1;
            /*
            第一页
            o.nowPage = 1;
            o.first = 1 ;
            if(o.showPageCount< o.totalPage){
                o.last  = parseInt(o.showPageCount);
            }else{
                o.last =  parseInt(o.totalPage);
            }*/
            if(o.nowPage/o.showPageCount==1)
                var nowPage = 0;
            else
                var nowPage = parseInt(o.nowPage/o.showPageCount);

            o.first =  (nowPage-1)*o.showPageCount+1;
            o.last = (nowPage)*o.showPageCount;
            if(o.first<=1){
                o.first =  1;
            }
            if(o.last<=0){
                o.last = (nowPage+1)*o.showPageCount;
            }
            if(parseInt(o.first+o.last)%2==0){
                o.nowPage = parseInt(o.first+o.last)/2;
            }else{
                o.nowPage = parseInt((o.first+o.last)/2);
            }

            o.updatePage();
            o.updateColor($(this),$("#page"+ o.nowPage+o.obj));
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
            else if(o.nowPage < o.showPageCount/2+1)
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
            o.updateColor($(this),$("#page"+ o.nowPage+o.obj));
            o.getData(o.nowPage, o.listRow);
        });

        $(".next-page").click(function(){

            //console.log(o.first+','+ o.last+','+o.nowPage);
            //o.first = parseInt(o.totalPage) - parseInt(o.showPageCount)+1;
            //o.last = parseInt(o.totalPage);
            if(o.nowPage/o.showPageCount==1)
               var nowPage = 0;
            else
               var nowPage = parseInt(o.nowPage/o.showPageCount);
            o.first =  (nowPage+1)*o.showPageCount+1;
            o.last = (nowPage+2)*o.showPageCount;
            if(o.first>o.totalPage){
                o.first =  (nowPage)*o.showPageCount+1;
            }
            if(o.last>=o.totalPage){
                o.last = o.lastEnd;
            }
            if(parseInt(o.first+o.last)%2==0){
                o.nowPage = parseInt(o.first+o.last)/2;
            }else{
                o.nowPage = parseInt((o.first+o.last)/2);
            }

           /* o.nowPage = parseInt(o.nowPage) + 1;
            if(o.last < o.totalPage && o.nowPage > o.showPageCount/2+1)
            {
                //o.first = parseInt(o.last) -1;
                o.first = parseInt(o.first);
                o.last = parseInt(o.last) ;
            }*/
            o.updatePage();
            o.updateColor($(this),$("#page"+ o.nowPage+o.obj));
            o.getData(o.nowPage, o.listRow);
        });
    }
    return o;
}