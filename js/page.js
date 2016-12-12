/**
 * Created by cjj
 */

function Page(count,listRow,showPageCount,divId,getData){
    var o = {};//分页对象
    o.nowPage = 1;//当前为第几页
    o.listRow = listRow;//一页显示多少条数据
    o.count = count;//数据总数
    o.showPageCount = showPageCount;//显示多少个分页按钮
    o.first = 0;//第一个显示的分页按钮是多少
    o.last = 0;//最后一个显示的分页按钮是多少
    o.getData = getData;//取数据的回调函数
    o.obj = divId ;//制定在那个元素后面显示(Jquery对象)

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
        /* 规则：
        按钮：<li><a  id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>"
        第一个按钮：只有一个分页按钮的时候不显示分页控件
        左边按钮：<li><a class="page-item pre-page"><span>&laquo;</span></a></li>
        是第一页的时候，不显示左边按钮
        右边按钮：<li><a class="page-item next-page"><span aria-hidden="true">&raquo;</span></a></li>
        是最后一页的时候，不显示右边按钮
        总显示分页数大于当前总分页数时，不显示分页超出的分页按钮
        */
        //一页范围内  不显示
        //获取最大页数
        var total = parseInt(o.count/o.listRow)+1;
        //第一页
        o.first = o.nowPage;
        //最后一页
        o.last = o.nowPage - 1 + o.showPageCount;
        //获取实际最后一页
        o.last = o.last > total ? total : o.last;
        var html = '<nav class="pageWrap pageSyncWrap page-div">';
        html += '<ul class="my-page pagination" >';
        if(o.first > 1){
            html += '<li><a class="page-item pre-page"><span>&laquo;</span></a></li>';
        }
        for(var i = o.first;i <= o.last;i ++){
            //拼接每一个分页数组按钮，并为其设置id
            html += "<li><a  id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>";
        }
        if(o.last < total){
            html += '<li><a class="page-item next-page"><span aria-hidden="true">&raquo;</span></a></li>';
        }
        html += '</ul>';
        html += '</nav>';
        console.info("id="+'#'+o.obj+" ;first="+o.first+" ;last="+o.last+" ;total="+total+" ;count"+o.count);
        //设置分页内容和是否显示和隐藏
        $('#'+o.obj).html(html);
        //设置被选中
        $("#page"+o.nowPage+o.obj).parent().addClass('active');
        //设置分页内容是否显示或隐藏
        if(total > 1){
            $('#'+o.obj).show();
        }else{
            $('#'+o.obj).hide();
        }
        //调用获取数据的回调函数
        o.getData(o.nowPage, o.listRow);
    }
    /*
     *  更新分页控件
     */
    o.updatePage = function()
    {
        /* 规则：
         按钮：<li><a  id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>"
         第一个按钮：只有一个分页按钮的时候不显示分页控件
         左边按钮：<li><a class="page-item pre-page"><span>&laquo;</span></a></li>
         是第一页的时候，不显示左边按钮
         右边按钮：<li><a class="page-item next-page"><span aria-hidden="true">&raquo;</span></a></li>
         是最后一页的时候，不显示右边按钮
         总显示分页数大于当前总分页数时，不显示分页超出的分页按钮
         */
        //一页范围内  不显示
        //获取最大页数
        var total = parseInt(o.count/o.listRow)+1;
        //是否需要修改最后一页：如果选中页数超过显示页数的中间页数，则修改最后一页
        //中间页数操作
        var middle = parseInt(o.showPageCount/2);
        if( o.nowPage > ( o.last-middle )){
            //最后一页
            o.last = o.nowPage + middle;
            //获取实际最后一页
            o.last = o.last > total ? total : o.last;
            //第一页
            o.first = o.last - o.showPageCount - 1;
            //获取实际第一页
            o.first = o.first>=1?o.first:1;
        }
        var html = '<nav class="pageWrap pageSyncWrap page-div">';
        html += '<ul class="my-page pagination" >';
        if(o.first > 1){
            html += '<li><a class="page-item pre-page"><span>&laquo;</span></a></li>';
        }
        for(var i = o.first;i <= o.last;i ++){
            //拼接每一个分页数组按钮，并为其设置id
            html += "<li><a  id=page"+i+o.obj+" class = 'page-item each-page'>"+i+"</a></li>";
        }
        if(o.last < total){
            html += '<li><a class="page-item next-page"><span aria-hidden="true">&raquo;</span></a></li>';
        }
        html += '</ul>';
        html += '</nav>';
        console.info("id="+'#'+o.obj+" ;first="+o.first+" ;last="+o.last+" ;total="+total+" ;count"+o.count);
        //设置分页内容和是否显示和隐藏
        $('#'+o.obj).html(html);
        //设置被选中
        $("#page"+o.nowPage+o.obj).parent().addClass('active');
        //设置分页内容是否显示或隐藏
        if(total > 1){
            $('#'+o.obj).show();
        }else{
            $('#'+o.obj).hide();
        }
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