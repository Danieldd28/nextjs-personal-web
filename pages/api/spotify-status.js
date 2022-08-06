const Spotify = require('../../lib/spotify')
const spotify = new Spotify()


export default async function handler(req, res) {
    try {
        const spf = await spotify.get_status()
        res.setHeader("Cache-Control", `public, max-age=0, must-revalidate`);
        res.setHeader('content-type', 'image/svg+xml; charset=utf-8');
        res.send(`<svg width="325" height="87" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="cardTitle" role="img"><title id="cardTitle">${spf.isPlaying ? "Listening on spotify" : "Recently playing"}</title><foreignObject width="320" height="100"><style>div {font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;}.container {display: flex;align-items: center;border-radius: 10px;padding: 10px 10px }.cover-link {height: 64px;}.cover {border-radius: 3px;margin-right: 10px;}.playing {display: flex;justify-content: center;align-items: center;color: #53b14f;font-weight: bold;text-align: center;margin-bottom: 8px;}.not-play {color: #ff1616;text-align: center;margin-bottom: 0;}.text-container {align-self: flex-end;width: 200px;height: 70px;}.artist {color: #434343;font-weight: 500;font-size: 16px;text-align: center;margin-bottom: 3px;}.song {color: #999;font-size: 15px;text-align: center;margin-bottom: 17px;}.artist{color: #E8EFED;}.song{color: #D5D9D9;}.song-container {overflow: hidden;white-space: nowrap;}.song-container::before {content: '&#160;';}.scrolling {animation: marquee 10s linear infinite;display: inline-block;padding-right: 20px;transform: translateX(100%);}@keyframes marquee {from {transform: translateX(100%);}to {transform: translateX(-100%);}}#bars {position: absolute;height: 14px;width: 200px;overflow: hidden;margin: -14px 0 0 0px;}.bar {background: #ffffff;bottom: 1px;height: 3px;position: absolute;width: 2px;animation: sound 0ms -800ms linear infinite alternate;}@keyframes sound {0% {opacity: .35;height: 3px;}100% {opacity: 1;height: 14px;}}.bar:nth-child(1) {left: 1px;animation-duration: 403ms;}.bar:nth-child(2) {left: 5px;animation-duration: 449ms;}.bar:nth-child(3) {left: 9px;animation-duration: 398ms;}.bar:nth-child(4) {left: 13px;animation-duration: 463ms;}.bar:nth-child(5) {left: 17px;animation-duration: 380ms;}.bar:nth-child(6) {left: 21px;animation-duration: 490ms;}.bar:nth-child(7) {left: 25px;animation-duration: 359ms;}.bar:nth-child(8) {left: 29px;animation-duration: 424ms;}.bar:nth-child(9) {left: 33px;animation-duration: 491ms;}.bar:nth-child(10) {left: 37px;animation-duration: 413ms;}.bar:nth-child(11) {left: 41px;animation-duration: 416ms;}.bar:nth-child(12) {left: 45px;animation-duration: 460ms;}.bar:nth-child(13) {left: 49px;animation-duration: 424ms;}.bar:nth-child(14) {left: 53px;animation-duration: 434ms;}.bar:nth-child(15) {left: 57px;animation-duration: 383ms;}.bar:nth-child(16) {left: 61px;animation-duration: 398ms;}.bar:nth-child(17) {left: 65px;animation-duration: 474ms;}.bar:nth-child(18) {left: 69px;animation-duration: 373ms;}.bar:nth-child(19) {left: 73px;animation-duration: 424ms;}.bar:nth-child(20) {left: 77px;animation-duration: 445ms;}.bar:nth-child(21) {left: 81px;animation-duration: 489ms;}.bar:nth-child(22) {left: 85px;animation-duration: 452ms;}.bar:nth-child(23) {left: 89px;animation-duration: 406ms;}.bar:nth-child(24) {left: 93px;animation-duration: 435ms;}.bar:nth-child(25) {left: 97px;animation-duration: 413ms;}.bar:nth-child(26) {left: 101px;animation-duration: 471ms;}.bar:nth-child(27) {left: 105px;animation-duration: 369ms;}.bar:nth-child(28) {left: 109px;animation-duration: 362ms;}.bar:nth-child(29) {left: 113px;animation-duration: 399ms;}.bar:nth-child(30) {left: 117px;animation-duration: 441ms;}.bar:nth-child(31) {left: 121px;animation-duration: 490ms;}.bar:nth-child(32) {left: 125px;animation-duration: 468ms;}.bar:nth-child(33) {left: 129px;animation-duration: 485ms;}.bar:nth-child(34) {left: 133px;animation-duration: 354ms;}.bar:nth-child(35) {left: 137px;animation-duration: 397ms;}.bar:nth-child(36) {left: 141px;animation-duration: 364ms;}.bar:nth-child(37) {left: 145px;animation-duration: 364ms;}.bar:nth-child(38) {left: 149px;animation-duration: 472ms;}.bar:nth-child(39) {left: 153px;animation-duration: 378ms;}.bar:nth-child(40) {left: 157px;animation-duration: 404ms;}.bar:nth-child(41) {left: 161px;animation-duration: 449ms;}.bar:nth-child(42) {left: 165px;animation-duration: 443ms;}.bar:nth-child(43) {left: 169px;animation-duration: 375ms;}.bar:nth-child(44) {left: 173px;animation-duration: 365ms;}.bar:nth-child(45) {left: 177px;animation-duration: 351ms;}.bar:nth-child(46) {left: 181px;animation-duration: 426ms;}.bar:nth-child(47) {left: 185px;animation-duration: 421ms;}.bar:nth-child(48) {left: 189px;animation-duration: 500ms;}.bar:nth-child(49) {left: 193px;animation-duration: 480ms;}.bar:nth-child(50) {left: 197px;animation-duration: 489ms;}.bar:nth-child(51) {left: 201px;animation-duration: 472ms;}.bar:nth-child(52) {left: 205px;animation-duration: 470ms;}.bar:nth-child(53) {left: 209px;animation-duration: 418ms;}.bar:nth-child(54) {left: 213px;animation-duration: 474ms;}.bar:nth-child(55) {left: 217px;animation-duration: 421ms;}.bar:nth-child(56) {left: 221px;animation-duration: 359ms;}.bar:nth-child(57) {left: 225px;animation-duration: 466ms;}.bar:nth-child(58) {left: 229px;animation-duration: 485ms;}.bar:nth-child(59) {left: 233px;animation-duration: 467ms;}.bar:nth-child(60) {left: 237px;animation-duration: 455ms;}.bar:nth-child(61) {left: 241px;animation-duration: 448ms;}.bar:nth-child(62) {left: 245px;animation-duration: 431ms;}.bar:nth-child(63) {left: 249px;animation-duration: 445ms;}.bar:nth-child(64) {left: 253px;animation-duration: 440ms;}.bar:nth-child(65) {left: 257px;animation-duration: 413ms;}.bar:nth-child(66) {left: 261px;animation-duration: 378ms;}.bar:nth-child(67) {left: 265px;animation-duration: 443ms;}.bar:nth-child(68) {left: 269px;animation-duration: 382ms;}.bar:nth-child(69) {left: 273px;animation-duration: 388ms;}.bar:nth-child(70) {left: 277px;animation-duration: 402ms;}.bar:nth-child(71) {left: 281px;animation-duration: 477ms;}.bar:nth-child(72) {left: 285px;animation-duration: 499ms;}.bar:nth-child(73) {left: 289px;animation-duration: 487ms;}.bar:nth-child(74) {left: 293px;animation-duration: 385ms;}.bar:nth-child(75) {left: 297px;animation-duration: 454ms;}.bar:nth-child(76) {left: 301px;animation-duration: 449ms;}.bar:nth-child(77) {left: 305px;animation-duration: 481ms;}.bar:nth-child(78) {left: 309px;animation-duration: 483ms;}.bar:nth-child(79) {left: 313px;animation-duration: 405ms;}.bar:nth-child(80) {left: 317px;animation-duration: 430ms;}.bar:nth-child(81) {left: 321px;animation-duration: 375ms;}.bar:nth-child(82) {left: 325px;animation-duration: 458ms;}.bar:nth-child(83) {left: 329px;animation-duration: 392ms;}.bar:nth-child(84) {left: 333px;animation-duration: 350ms;}.bar:nth-child(85) {left: 337px;animation-duration: 358ms;}.bar:nth-child(86) {left: 341px;animation-duration: 380ms;}.bar:nth-child(87) {left: 345px;animation-duration: 489ms;}.bar:nth-child(88) {left: 349px;animation-duration: 389ms;}.bar:nth-child(89) {left: 353px;animation-duration: 488ms;}.bar:nth-child(90) {left: 357px;animation-duration: 421ms;}.bar:nth-child(91) {left: 361px;animation-duration: 452ms;}.bar:nth-child(92) {left: 365px;animation-duration: 415ms;}.bar:nth-child(93) {left: 369px;animation-duration: 493ms;}.bar:nth-child(94) {left: 373px;animation-duration: 352ms;}.bar:nth-child(95) {left: 377px;animation-duration: 413ms;}.bar:nth-child(96) {left: 381px;animation-duration: 380ms;}.bar:nth-child(97) {left: 385px;animation-duration: 365ms;}.bar:nth-child(98) {left: 389px;animation-duration: 465ms;}.bar:nth-child(99) {left: 393px;animation-duration: 381ms;}.bar:nth-child(100) {left: 397px;animation-duration: 494ms;}</style><div xmlns="http://www.w3.org/1999/xhtml" class="container"><a href="${spf.url}" target="_BLANK" class="cover-link"><img src="${spf.image}" width="64" height="64" class="cover" /></a><div class="text-container"><div class="artist">${spf.artist}</div><div class="song">${spf.title}</div><div id='bars'>${spf.isPlaying ? "<div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div><div class='bar'></div>" : ""}</div></div></div></foreignObject></svg>`)
    } catch {
        res.status(302)
        res.setHeader('Location', '/assets/img/spotify-default.svg');
    }
}