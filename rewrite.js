var selector = '.build-step .dictionary a'

var orig_url = document.querySelector(selector).href
var s3_path = orig_url.split('s3.amazonaws.com/')[1]

var new_url = `https://s3.console.aws.amazon.com/s3/object/${s3_path}`

document.querySelector(selector).href=new_url

console.log('rewrote a url');

