/**
 * 统计英语文章里单词出现的频率
 * Created by Daphnis on 2017/3/2.
 */

//测试用例
//var article="There one is \"only\" one happiness ‘one’ in life,to love is one and be loved..";
//var result=wordStatistics(article);
//console.log("英语单词频率降序排列如下：");
//result.forEach(function(wordSta){
//    console.log(wordSta.word+":"+wordSta.times);
//});


//统计英语文章的词频
function wordStatistics(article){
    //先将字符串里的标点符号（不含引号）用空格代替
    //再去除字符串首尾的空格和引号
    var reg=/,|\.|\?|!|:|;|\r/g;
    article=article.replace(reg,' ').toLowerCase();
    article=article.replace(/(^\s*)|(\s*$)|\"|‘|’/g, "");

    var words=new Array(),//存放单词
        atimes=new Array();//存放单词出现的频率
    var strs=article.split(' ');
    //统计单词出现的频率
    strs.forEach(function(word){
        var index=words.indexOf(word);
        if(index<0){
            words.push(word);
            atimes.push(1);
        }else{
            atimes[index]++;
        }
    });

    var result=new Array();//存放单词和频率合并后的结果
    for(var i=0;i<words.length;++i){
        //console.log(words[i]+":"+atimes[i]);
        result.push({word:words[i],times:atimes[i]});
    }

    result.sort(function(a,b){
        return b.times- a.times;
    });
    return result;
}



