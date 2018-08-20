//! moment-holiday.js
//! version : 1.5.1
//! author : Kodie Grantham
//! license : MIT
//! https://github.com/kodie/moment-holiday
(function(){var e="undefined"==typeof require||null===require||require.amd?this.moment:require("moment"),t=[],r=function(r,a,n){for(var i,o=[],s=0;s<t.length;s++){var d=t[s](r,a);(d||!1===d)&&(i=d)}if(!1===i)return!1;if("string"==typeof i?a=i:i&&(o=i),!e.isMoment(o)&&!o.length&&a.charAt(0).match(/[0-9(]/)){var h=!1,l=a.split("|");l.length>1&&(h=!0),l.length>2&&(l=[l[0],l[1]]);for(s=0;s<l.length;s++){var f=e(r),u=l[s].split("/");if(1===u.length||2===u.length&&"("!==u[1].charAt(0)&&4===u[1].length){var c=l[s];s=-1,l=[];for(var v=1;v<13;v++)l.push(v+"/"+c)}else if(u.length>2&&f.year(parseInt(u[2])),f.month(parseInt(u[0])-1),"("===u[1].charAt(0)){var g=u[1].slice(1,-1).split(","),p=parseInt(g[0]),k=parseInt(g[1]),w=e(f).startOf("month"),m=e(f).endOf("month").diff(w,"days")+1,b=[];if(g[1]&&"["===g[1].charAt(0)){var _=!0;(k=parseInt(g[1].slice(1,-1)))<0&&(_=!1,k=parseInt(g[1].slice(2,-1))),w=e(f).date(k);for(var O=0;O<7;O++){if(w.day()===p){o.push(e(w));break}_?w.add(1,"day"):w.subtract(1,"day")}continue}for(var M=0;M<m;M++)w.day()===p&&b.push(e(w)),w.add(1,"day");if(!k){o=o.concat(b);continue}f=k<0?b[b.length+k]:b[k-1],o.push(f)}else o.push(f.date(u[1]))}if(h&&o.length>1){var x=o[1].diff(o[0],"days");if(x>1){var j=e(o[0]);o=[o[0]];for(s=0;s<x;s++)j.add(1,"day"),o.push(e(j))}}}o=y(o);for(s=0;s<o.length;s++)e.isMoment(o[s])?(n&&(0===o[s].day()&&(o[s]=o[s].add(1,"day")),6===o[s].day()&&(o[s]=o[s].subtract(1,"day"))),o[s]=o[s].startOf("day")):delete o[s];return!!o.length&&(1===o.length?o[0]:o)},a=function(e,t){var r=[];t=y(t);for(var a=0;a<t.length;a++){var n=e.match(new RegExp(t[a],"gi"));n&&(r=r.concat(n))}return r},n=function(t,n,i,o,s){var d={},l=[],y={};if(h=s||e.holidays.active,h.hasOwnProperty(n))l.push(n);else if(fk=f(n,h))l.push(fk);else{for(var u in h)if(h.hasOwnProperty(u))if(d[u]=a(n,u.split(/[\s,.-]+/).filter(function(e){return e.length>2})).length,h[u].keywords_n&&a(n,h[u].keywords_n).length)d[u]=0;else{if(h[u].keywords_y){var c=a(n,h[u].keywords_y);if(!c||c.length!==h[u].keywords_y.length){d[u]=0;continue}d[u]+=c.length}if(h[u].keywords){var v=a(n,h[u].keywords);if(!v)continue;d[u]+=v.length}}for(var g in d)d[g]&&d.hasOwnProperty(g)&&(l.length&&d[g]!==d[l[0]]?d[g]>d[l[0]]&&(l=[g]):l.push(g))}if(!l.length)return!1;if(!1===o)return l;for(var p=0;p<l.length;p++){var k=r(t,h[l[p]].date,i);k&&(y[l[p]]=k)}return!!Object.keys(y).length&&y},i=function(t,r,a,i,o){var s=[];i&&(s={}),r=y(r),o||(o=e.holidays.active);for(var d=0;d<r.length;d++){var h=n(t,r[d],a,i,o);h&&(s=i?u(s,h):s.concat(h))}return s},o=function(t,a){var n=e.holidays.active,i={};for(var o in n)n.hasOwnProperty(o)&&(td=r(t,n[o].date,a))&&(i[o]=td);return i},s=function(t,r){var a=e.holidays[t],n={};if(a)for(var i=0;i<r.length;i++){var o=r[i].toLowerCase(),s=e.holidays[t+"/"+o];s={};for(var d in a)if(a.hasOwnProperty(d)){var h=a[d].regions||[],l=a[d].regions_n||[];h.length&&h.join().toLowerCase().split(),l.length&&l.join().toLowerCase().split(),(!h.length&&!l.length||h.length&&~h.indexOf(o)||l.length&&!~l.indexOf(o))&&(s[d]=a[d])}s&&(n=u(n,s))}return!!Object.keys(n).length&&n},d=function(t){if(regions=t.split("/"),t=regions[0].toLowerCase().replace(" ","_"),regions.shift(),!e.holidays[t])try{var r="./locale/";"build"==__dirname.split("/").slice(-1).pop()&&(r="."+r),require(r+t)}catch(e){}return!!e.holidays[t]&&(regions.length?s(t,regions):e.holidays[t])},l=function(t,r,a,n){r||(r=1);for(var i=o(t,n),s=e(t),d=t.year(),h=[],l=0;l<r;l++)for(var f=e(s);;){var u=!1;if(a?f.add(1,"day"):f.subtract(1,"day"),f.year()!==d&&(i=o(f,n),d=f.year()),!Object.keys(i).length){u=!0;break}for(var c in i)if(i.hasOwnProperty(c)){for(var v=!1,g=y(i[c]),p=0;p<g.length;p++)if(f.isSame(g[p],"day")){h.push(g[p]),s=e(f),v=!0;break}if(v){u=!0;break}}if(u)break}return!!h.length&&(1===h.length?h[0]:h)},y=function(e){return e&&e.constructor!==Array?[e]:e},f=function(e,t){t.constructor===Object&&(t=Object.keys(t));for(var r=0;r<t.length;r++)if(e.toLowerCase()===t[r].toLowerCase())return t[r];return!1},u=function(e,t){return Object.assign({},e,t)};e.fn.holiday=function(t,r){e.holidays.active;var a={},i=!1;if(t){t.constructor!==Array&&(i=!0,t=[t]);for(var s=0;s<t.length;s++)(td=n(this,t[s],r))&&(a=Object.assign({},a,td))}else a=o(this,r);var d=Object.keys(a);return!!d.length&&(1===d.length&&i?a[d[0]]:a)},e.fn.holidays=function(e,t){return this.holiday(e,t)},e.fn.isHoliday=function(e,t){var r,a,n=[];if(e?(e=y(e),r=this.holiday(e,t),a=!1):(r=o(this,t),a=!0),!r)return!1;for(var i in r)if(r.hasOwnProperty(i))for(var s=y(r[i]),d=0;d<s.length;d++)if(this.isSame(s[d],"day")){if(!a)return!0;n.push(i)}return!!n.length&&(1===n.length?n[0]:n)},e.fn.previousHoliday=function(e,t){return l(this,e,!1,t)},e.fn.previousHolidays=function(e,t){return this.previousHoliday(e,t)},e.fn.nextHoliday=function(e,t){return l(this,e,!0,t)},e.fn.nextHolidays=function(e,t){return this.nextHoliday(e,t)},e.fn.holidaysBetween=function(t,r){t||(t=new Date),t=e(t).subtract(1,"day");for(var a=o(this,r),n=e(this),i=n.year(),s=[],d=0;d<t.diff(this,"days")&&(n.add(1,"day"),n.year()!==i&&(a=o(n,r),i=n.year()),Object.keys(a).length);d++)for(var h in a){for(var l=!1,f=y(a[h]),u=0;u<f.length;u++)if(n.isSame(f[u],"day")){s.push(f[u]),l=!0;break}if(l)break}return!!s.length&&s},e.holidays={active:{},active_last:{}},e.modifyHolidays={set:function(t,r){var a={};if(t.constructor===Array){for(var o=[],s=0;s<t.length;s++){var h=n(this,t[s],null,!1);h&&(o=o.concat(h))}if(o.length){a=u(e.holidays.active);for(var l in a)a.hasOwnProperty(l)&&(~o.indexOf(l)||delete a[l])}}else if("string"==typeof t){var y=d(t);if(y)if(r)for(var f=i(this,r,!1,!1,y),s=0;s<f.length;s++)a[f[s]]=u(y[f[s]]);else a=u(y)}else a=t;return!Object.keys(a).length&&t!==a||Object.is(e.holidays.active,a)||(e.holidays.active_last=u(e.holidays.active),e.holidays.active=a),this},add:function(t,r){if("string"==typeof t){var a=d(t);if(t={},a)if(r)for(var n=i(this,r,!1,!1,a),o=0;o<n.length;o++)t[n[o]]=u(a[n[o]]);else t=a}return Object.keys(t).length&&(e.holidays.active_last=u(e.holidays.active),e.holidays.active=u(e.holidays.active,t)),this},remove:function(t){t=y(t);var r=i(this,t,!1,!1),a=u(e.holidays.active);if(r)for(var n=0;n<r.length;n++)delete a[r[n]];return Object.is(e.holidays.active,a)||(e.holidays.active_last=u(e.holidays.active),e.holidays.active=a),this},undo:function(){var t=u(e.holidays.active);return e.holidays.active=u(e.holidays.active_last),e.holidays.active_last=t,this},load:function(e){e=y(e);for(var t=0;t<e.length;t++)d(e[t]);return this},extendParser:function(e){return t.push(e),this}},null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)&&(module.exports=e)}).call(this),
//! moment-holiday.js locale configuration
//! locale : United States
//! author : Kodie Grantham : https://github.com/kodie
function(){var e="undefined"==typeof require||null===require||require.amd?this.moment:require("moment");e.holidays.united_states={"New Year's Day":{date:"1/1",keywords_n:["eve"]},"Martin Luther King Jr. Day":{date:"1/(1,3)",keywords:["mlk"]},"Valentine's Day":{date:"2/14"},"Washington's Birthday":{date:"2/(1,3)",keywords:["george","president","day"]},"Saint Patrick's Day":{date:"3/17",keywords:["st[\\s\\.]","paddy","patty"]},"Good Friday":{date:"easter-2",keywords_y:["good","friday"]},"Easter Sunday":{date:"easter",keywords_y:["easter"],keywords:["sunday"]},"Memorial Day":{date:"5/(1,-1)"},"Mother's Day":{date:"5/(0,2)",keywords:["mom"]},"Father's Day":{date:"6/(0,3)",keywords:["dad"]},"Independence Day":{date:"7/4",keywords:["4th","fourth","july"]},"Labor Day":{date:"9/(1,1)",keywords:["labour"]},"Columbus Day":{date:"10/(1,2)",keywords:["christopher"]},Halloween:{date:"10/31"},"Veteran's Day":{date:"11/11",keywords:["vet"]},"Thanksgiving Day":{date:"11/(4,4)",keywords:["thanks","turkey"],keywords_n:["after"]},"Day after Thanksgiving":{date:"11/(5,4)",keywords:["thanks","turkey"],keywords_y:["after"]},"Christmas Eve":{date:"12/24",keywords:["christ","x-?mas"],keywords_y:["eve"]},"Christmas Day":{date:"12/25",keywords:["christ","x-?mas"],keywords_n:["eve"]}},null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)&&(module.exports=e)}.call(this),
//! moment-holiday.js locale configuration
//! locale : Easter Related Holidays
//! author : Kodie Grantham : https://github.com/kodie
function(){var e="undefined"==typeof require||null===require||require.amd?this.moment:require("moment");e.holidays.easter={"Ash Wednesday":{date:"easter-46"},Lent:{date:"easter-46|easter-3"},"Maundy Thursday":{date:"easter-3",keywords_y:["maundy","thursday"]},"Good Friday":{date:"easter-2",keywords_y:["good","friday"]},"Holy Saturday":{date:"easter-1",keywords_y:["holy","saturday"]},"Easter Sunday":{date:"easter",keywords_y:["easter"],keywords:["sunday"]},"Easter Monday":{date:"easter+1",keywords_y:["easter","monday"]},"Ascension Day":{date:"easter+39"},"Pentecost Sunday":{date:"easter+49",keywords_y:["pentecost"],keywords:["sunday"]},"Whit Monday":{date:"easter+50",keywords_y:["whit"],keywords:["monday"]},"Corpus Christi":{date:"easter+60",keywords:["feast"]}};var t=function(t){var r=Math.floor(t/100),a=t-19*Math.floor(t/19),n=Math.floor((r-17)/25),i=r-Math.floor(r/4)-Math.floor((r-n)/3)+19*a+15;i-=30*Math.floor(i/30),i-=Math.floor(i/28)*(1-Math.floor(i/28)*Math.floor(29/(i+1))*Math.floor((21-a)/11));var o=t+Math.floor(t/4)+i+2-r+Math.floor(r/4),s=i-(o-=7*Math.floor(o/7)),d=3+Math.floor((s+40)/44),h=s+28-31*Math.floor(d/4);return e([t,d-1,h])};e.modifyHolidays.extendParser(function(e,r){if(~r.indexOf("easter")){var a=r.split("|"),n=[];for(i=0;i<a.length;i++)if("easter"===a[i].substring(0,6)){var o=t(e.year());if("-"===a[i].charAt(6)&&o.subtract(a[i].substring(7),"days"),"+"===a[i].charAt(6)&&o.add(a[i].substring(7),"days"),1===a.length)return o;n.push(o.format("M/D"))}else n.push(a[i]);if(n.length)return n.join("|")}}),null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)&&(module.exports=e)}.call(this),
//! Set default locales
function(){("undefined"==typeof require||null===require||require.amd?this.moment:require("moment")).modifyHolidays.add("United States")}.call(this);
//# sourceMappingURL=moment-holiday-us.min.js.map
