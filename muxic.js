/*
音乐信息
感谢 @武恩赐 提供的 MetingAPI
https://api.wuenci.com/meting/api/
作者: imsyy
主页：https://www.imsyy.top/
GitHub：https://github.com/imsyy/home
版权所有，请勿删除
*/
var server = "tencent"; //netease: 网易云音乐; tencent: QQ音乐; kugou: 酷狗音乐; xiami: 虾米; kuwo: 酷我
var type = "playlist"; //song: 单曲; playlist: 歌单; album: 唱片
var id = "8516382042"; //封面 ID / 单曲 ID / 歌单 ID

$.ajax({
    url: "https://api.wuenci.com/meting/api/?server=" + server + "&type=" + type + "&id=" + id, //json文件位置，文件名
    type: "GET",
    dataType: "JSON",
    success: function (data) {
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            order: 'random',
            preload: 'auto',
            listMaxHeight: '336px',
            volume: '0.5',
            mutex: true,
            lrcType: 3,
            audio: data,
        });
    }
})