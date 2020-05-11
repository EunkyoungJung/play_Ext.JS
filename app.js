// /*
//  * This file is generated and updated by Sencha Cmd. You can edit this file as
//  * needed for your application, but these edits will have to be merged by
//  * Sencha Cmd when upgrading.
//  */
// Ext.application({
//     name: 'Study',

//     extend: 'Study.Application',

//     requires: [
//         'Study.view.main.Main'
//     ],

//     // The name of the initial view to create. With the classic toolkit this class
//     // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
//     // modern toolkit, the main view will be added to the Viewport.
//     //
//     mainView: 'Study.view.main.Main'

//     //-------------------------------------------------------------------------
//     // Most customizations should be made to Study.Application. If you need to
//     // customize this file, doing so below this section reduces the likelihood
//     // of merge conflicts when upgrading to new versions of Sencha Cmd.
//     //-------------------------------------------------------------------------
// });

// Ext.onReady(function(){
//     // Ext.Msg.alert("타이틀", "헬로월드")
//     Ext.create("Ext.panel.Panel",{
//         width : 300,
//         height : 300,
//         renderTo : Ext.getBody(),
//         border : true
//     })
// })

// Ext.onReady(function(){
//     Ext.create("Ext.container.Viewport",{
//         layout : 'fit',
//         border : true,
//         items : [{
//             type : 'panel',
//             title : '부모채널'
//         }]
//     })
// })

// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 200,
//         height : 200,
//         title : '6강 ExtJS 타이틀',
//         renderTo : Ext.getBody()
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.container.Viewport", {
//         layout : 'border',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'panel',
//             height : 100,
//             title : 'haha',
//             header : false,
//             region : 'north',
//             items : [{
//                 xtype : 'toolbar',
//                 items : [{
//                         xtype : 'button',
//                         text : 'File',
//                         menu : [{
//                             text : 'New',
//                             iconCls : 'fa fa-file'
//                         },{
//                             text : 'Open File'
//                         },{
//                             text : 'Close'
//                         }]
//                     },{
//                         xtype : 'splitbutton',
//                         text : 'Edit',
//                         menu : [{
//                             text : 'Undo Type'
//                         },{
//                             text : 'Redo'
//                         },{
//                             text : 'Cut'
//                         }]
//                     },{
//                         xtype : 'button',
//                         text : 'Source'
//                     }, {
//                         xtype : 'segmentedbutton',
//                         allowMultiple : true,
//                         items : [{
//                             xtype : 'button',
//                             text : 'Refactor'
//                         },{
//                             xtype : 'button',
//                             text : 'Navigate'
//                         },{
//                             xtype : 'button',
//                             text : 'Search'
//                         }]

//                     }]
//                 },{
//                     xtype : 'toolbar',
//                     items : [{
//                             xtype : 'button',
//                             iconCls : 'fa fa-plus'
//                         },{
//                             xtype : 'button',
//                             iconCls : 'fa fa-floppy-o'
//                         },{
//                             xtype : 'button',
//                             iconCls : 'fa fa-desktop'
//                         }, {
//                             xtype : 'button',
//                             iconCls: 'fa fa-play',
//                             scale : 'small'
//                         },{
//                             xtype : 'button',
//                             iconCls : 'fa fa-pause',
//                             scale : 'medium'
//                         },{
//                             xtype : 'button',
//                             iconCls : 'fa fa-stop',
//                             scale : 'large',
//                             enableToggle : true
//                         }]
//                 }]
//         },{
//             xtype : 'panel',
//             width : 150,
//             split : true,
//             title : 'Project Explorer',
//             region : 'west'
//         },{
//             xtype : 'panel',
//             title : 'haha',
//             header : false, // 타이틀을 숨기는 옵션 
//             flex : 1,
//             region : 'center',
//             layout : 'border',
//             items : [{
//                 xtype : 'panel',
//                 flex : 2,
//                 region : 'center',
//             },{
//                 xtype : 'panel',
//                 flex : 1,
//                 region : 'south',
//             }]
//         }]
//     })
// })



// Ext.onReady(function(){
//     alert('it is alert');
//     confirm('confirming?');
// })



// Ext.onReady(function(){
//     //1. Ext.JS ALERT
//     // Msg.alert는 싱글톤?(상수형?)이라서 
//     //"Ext.create('클래스명', '서브속성')" 형태로 생성하지 않아도 됩니당 (이렇게하면 에러남)
//     Ext.Msg.alert('타이틀', '바디');
// })


// Ext.onReady(function(){
//     //1. Ext.JS ALERT
//     // Msg.alert는 싱글톤?(상수형?)이라서 
//     //"Ext.create('클래스명', '서브속성')" 형태로 생성하지 않아도 됩니당 (이렇게하면 에러남)
//     Ext.create('Ext.Msg') //에러 발생
// })




// Ext.onReady(function(){
//     //1. Ext.JS ALERT
//     Ext.Msg.alert('타이틀', '바디');
//     // alert창의 확인을 누르지 않아도, 바로 그 다음줄로 넘어가는 문제?가 있어서
//     // Et.JS alert 다음에는 무조건 return을 명시해주세욤
//     return;
//     console.log('AA')
// })



// Ext.onReady(function(){
//     Ext.Msg.confirm('타이틀','바디', function(button){
//         console.log(button); //세미콜론이 없으면 실행안되더라구욤! 조심!
//     })
// })


// Ext.onReady(function(){
//     Ext.Msg.confirm('타이틀','바디', function(button){
//         console.log(button); //세미콜론이 없으면 실행안되더라구욤! 조심!
//         if(button == "yes"){

//         }
//         else{

//         }
//     })
// })



// Ext.onReady(function(){
//     Ext.toast('토스트입니다.')
// })




// Ext.onReady(function(){
//     Ext.toast({
//         html : '토스트입니다',
//         align : 'br' // bottom-right
//     })
// })


// Ext.onReady(function(){
//     Ext.MessageBox.show({
//         title : '상단내용',
//         msg : '몸통내용'
//     });
// })



// Ext.onReady(function(){
//     Ext.MessageBox.show({
//         title : '상단내용',
//         msg : '몸통내용',
//         icon : Ext.MessageBox.INFO,
//         buttonText : { // 총4가지 옵션?을 넣을 수 있음
//             ok : '오케이',
//             no : '노',
//             yes : '예스',
//             cancel : '캔슬' 
//         }
//     });
// })



// Ext.onReady(function(){
//     Ext.MessageBox.show({
//         title : '상단내용',
//         msg : '몸통내용',
//         icon : Ext.MessageBox.INFO,
//         buttons : Ext.MessageBox.YESNO,
//         fn : function(button){
//             console.log(button);
//         }
//     });
// })





// Ext.onReady(function(){
//     // Et.window.Window는 기존의 싱글톤과는 다르게 Ext.create()로 만들어 줘야함
//     var win = Ext.create("Ext.window.Window", {
//         autoShow : true
//     });
// })


// Ext.onReady(function(){
//     var win = Ext.create("Ext.window.Window");
//     win.show()
// })




// Ext.onReady(function(){
//     Ext.create('Ext.panel.Panel', {
//         border : true,
//         width : 300,
//         height : 300,
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'button',
//             text : '패널버튼',
//             handler : function(btn){
//                 var win = Ext.create('Ext.window.Window', {
//                     width : 300,
//                     height: 300,
//                     maxHeight : 400,
//                     title : '윈도우 타이틀',
//                     items : [{
//                         xtype : 'button',
//                         text : '윈도우 버튼'
//                     }],
//                     maximizable : true,
//                     modal : true
//                 });
//                 win.show()
//             }
//         }]
//     });
// })

// Ext.onReady(function(){
//     Ext.create("Ext.tab.Panel",{
//         width : 300,
//         height : 300,
//         renderTo : Ext.getBody(),
//         tabPosition : "right",
//         items : [{
//             xtype : 'panel',
//             title : 'p1',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼1'
//             }]
//         },{
//             xtype : 'panel',
//             title : 'p2',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼2'
//             }]
//         },{
//             xtype : 'panel',
//             title : 'p3',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼3'
//             }]
//         },{
//             xtype : 'panel',
//             title : 'p4',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼4'
//             }]
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 500,
//         height : 500,
//         title : '폼필드 알아보기',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'textfield', // html의 <input type='text' />와 동일
//             allowBlank : false, // 빈값을 허용할지 여부에 대한 속성
//             emptyText : '입력' // html input 태그의 placeholder 속성
//         }, {
//             // <input type = "password" />
//             xtype : 'textfield',
//             inputType : 'password',
//             emptyText : '패스워드를 입력하세요.'
//         }, {
//             // <input type = 'password'>
//             xtype : 'datefield',
//             format : 'y-m-d'
//         }, {
//             xtype : 'numberfield',
//             minValue : 0,
//             maxValue : 10
//         }, {
//             xtype : 'timefield'
//         }, {
//             // <input type='file' />
//             xtype : 'filefield',
//             buttonOnly : true
//         },{
//             // <input type='checkbox' />
//             xtype : 'checkboxfield',
//             boxLabel : '아이디기억'
//         }, {
//             // <input type = 'radio' name = 'aaa' />
//             xtype : 'radiofield',
//             name : 'sex',
//             boxLabel : '여'

//         }, {
//             // <input type = 'radio' name = 'aaa' />
//             xtype : 'radiofield',
//             name : 'sex',
//             boxLabel : '남'

//         }, {
//             xtype : 'slider',
//             width : 300,
//             value : 50
//         }]
//     })
// })



// Ext.onReady(function(){
//     Ext.create('Ext.panel.Panel', {
//         width : 300,
//         height : 300,
//         title : 'DataStore 이해',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'combo',
//             displayField : 'test1', // 화면상으로 보여지는 값
//             valueField: 'test2', // 선택했을 때 실제로 서버로 넘어가는 값
//             // 요즘은 아래와 같이 쓰면, 알아서 Ext.data.Store를 호출함
//             // <option value='AAA'>테스트</option>
//             store : {
//                 fields : ['test1', 'test2'],
//                 data : [{
//                     test1 : '첫번째',
//                     test2 : 'first'
//                 }, {
//                     test1 : '두번째',
//                     test2 : 'second'
//                 }, {
//                     test1 : '세번째',
//                     test2 : 'third'
//                 }]
//             }
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create('Ext.panel.Panel', {
//         width : 300,
//         height : 300,
//         title : 'DataStore 이해',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'combo',
//             editTable : false,
//             value : 'second', // input태그의 placeholder처럼 미리 세팅
//             displayField : 'test1', // 화면상으로 보여지는 값
//             valueField: 'test2', // 선택했을 때 실제로 서버로 넘어가는 값
//             // 요즘은 아래와 같이 쓰면, 알아서 Ext.data.Store를 호출함
//             // <option value='AAA'>테스트</option>
//             store : {
//                 fields : ['test1', 'test2'],
//                 data : [{
//                     test1 : '첫번째',
//                     test2 : 'first'
//                 }, {
//                     test1 : '두번째',
//                     test2 : 'second'
//                 }, {
//                     test1 : '세번째',
//                     test2 : 'third'
//                 }]
//             }
//         }]
//     })
// })


// Ext.onReady(function(){
//     //Ext.grid.Panel
//     Ext.create("Ext.grid.Panel", {
//         width : 500,
//         height : 500,
//         renderTo : Ext.getBody(),
//         columns : [{
//             text : '컴럼1',
//             style : 'text.align:center', // 컬럼의 이름만 정렬설정 주기
//             flex : 1,
//             align : 'center',
//             dataIndex : 'c1'
//         }, {
//             text : '컴럼2',
//             flex : 1,
//             align : 'right',
//             dataIndex : 'c1'
//         }, {
//             text : '컴럼3',
//             flex : 1,
//             align : 'left',
//             dataIndex : 'c1'
//         }],
//         store : {
//             field : ['c1', 'c2', 'c3'],
//             data : [{
//                 c1 : '컬럼 1-1',
//                 c2 : '컬럼 1-2',
//                 c3 : '컬럼 1-3'
//             },{
//                 c1 : '컬럼 2-1',
//                 c2 : '컬럼 2-2',
//                 c3 : '컬럼 2-3'
//             }]
//         }
//     })

// })



// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 300,
//         height : 300,
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'combo',
//             displayField : 'key',
//             valueField : 'value',
//             store : {
//                 fields : ['key', 'value'],
//                 // AJAX로 호출해서 데이터를 불러올 때는!
//                 // data말고 proxy를 사용합니다!
//                 proxy : {
//                     type : 'ajax',
//                     url : '/data/combo.json',
//                     reader : {
//                         type : 'json',
//                         // rootProperty는 가지고 오려는 데이터의
//                         // 최상단 키값! 이것을 명심해주세요!
//                         rootProperty : 'data'
//                     }
//                 }
//             }
//         }, {
//             xtype : 'grid',
//             columns : [{
//                 text : '컬럼1',
//                 dataIndex : 'column1'
//             }, {
//                 text : '컬럼2',
//                 dataIndex : 'column2'
//             },{
//                 text : '컬럼3',
//                 dataIndex : 'column3'
//             }],
//             store : {
//                 autoLoad : true,
//                 fields : ['column1', 'column2', 'column3'],
//                 proxy : {
//                     type : 'ajax',
//                     url : '/data/grid.json',
//                     reader : {
//                         type : 'json',
//                         rootProperty : 'data'
//                     }
//                 }
//             }
//         }]
//     })
// })




// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 500,
//         height : 500,
//         renderTo: Ext.getBody(),
//         items : [{
//             xtype : 'treepanel',
//             root : {
//                 text : '루트패널',
//                 expanded : false
//             }
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 500,
//         height : 500,
//         renderTo: Ext.getBody(),
//         items : [{
//             xtype : 'treepanel',
//             root : {
//                 text : 'Servers',
//                 expanded : false,
//                 children : [{
//                     text : '.settings'
//                 },{
//                     text : 'Tomcat v8.0 Server at localhost-config'
//                 },{
//                     text : '.project',
//                     leaf : true
//                 }]
//             }
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 500,
//         height : 500,
//         renderTo: Ext.getBody(),
//         items : [{
//             xtype : 'treepanel',
//             root : {
//                 text : 'Servers',
//                 expanded : false,
//                 children : [{
//                     text : '.settings',
//                     expanded : false,
//                     children : [{
//                         text : 'org.ecplipse.wst.server.core.prefs',
//                         leaf : true
//                     }]
//                 },{
//                     text : 'Tomcat v8.0 Server at localhost-config',
//                     expanded : false,
//                     children : [{
//                         text : 'catalina.policy',
//                         leaf : true
//                     },{
//                         text : 'catalina.properties',
//                         leaf : true
//                     }]
//                 },{
//                     text : '.project',
//                     leaf : true
//                 }]
//             }
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 500,
//         height : 500,
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'treepanel',
//             store : {
//                 root : {
//                     text : 'Servers',
//                     expanded : false
//                 },
//                 proxy : {
//                     type : 'ajax',
//                     url : '/data/tree.json',
//                     reader : {
//                         type : 'json'
//                     }
//                 }
//             }
//         }]
//     })
// })



// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 800,
//         height : 500,
//         renderTo : Ext.getBody(),
//         layout : 'fit',
//         items : [{
//             xtype : 'grid',
//             columns : [{
//                 text : 'a',
//                 flex : 1
//             },{
//                 text : 'b',
//                 flex : 1
//             },{
//                 text : 'c',
//                 flex : 1
//             }]
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width : 800,
//         height : 500,
//         renderTo : Ext.getBody(),
//         layout : 'fit',
//         items : [{
//             xtype : 'grid',
//             columns : [{
//                 text : '시',
//                 dataIndex : 'si',
//                 flex : 1
//             },{
//                 text : '군구',
//                 dataIndex : 'gungu',
//                 flex : 1
//             },{
//                 text : '동',
//                 dataIndex : 'dong',
//                 flex : 1
//             }],
//             store : {
//                 autoLoad : true,
//                 fields : ['si', 'gungu', 'dong'],
//                 //pageSize : 5, // 서버로 5개 요청
//                 proxy : {
//                     type : 'ajax',
//                     url : "/data/grid2.json",
//                     reader:{
//                         type : 'json',
//                         rootProperty : 'data',
//                         totalProperty : 'total'
//                     }
//                 }
//             },
//             // bottom toolbar
//             bbar : {
//                 xtype : 'pagingtoolbar',
//                 // plugins : 'ux-slidingpager',
//                 plugins : 'ux-progressbarpager',
//                 displayInfo : true
//             }
//         }]
//     })
// })




Ext.onReady(function(){
    Ext.create("Ext.panel.Panel", {
        width : 800,
        height : 200,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'grid',
            columns : [{
                text : '시',
                dataIndex : 'si',
                flex : 1
            },{
                text : '군구',
                dataIndex : 'gungu',
                flex : 1
            },{
                text : '동',
                dataIndex : 'dong',
                flex : 1
            }],
            store : Ext.create("Ext.data.BufferedStore", {
                autoLoad : true,
                fields : ['si', 'gungu', 'dong'],
                proxy : {
                    type : 'ajax',
                    url : "/data/grid2.json",
                    reader:{
                        type : 'json',
                        rootProperty : 'data',
                        totalProperty : 'total'
                    }
                }
            })
        }]
    })
})
