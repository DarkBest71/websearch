var exec = require('child_process').exec;
exports.action = function(data, callback, config, SARAH){


  var search = data.dictation;

  var rgxp = search.replace(/jarvice /i,"");
  var rgxp1 = rgxp.replace(/recherche /i,"");
  var rgxp2 = rgxp1.replace(/sur /i,"");
  var rgxp3 = rgxp2.replace(/411 /i,"");
  var rgxp4 = rgxp3.replace(/google /i,"");
  var rgxp5 = rgxp4.replace(/ebay /i,"");
  var rgxp6 = rgxp5.replace(/youtube /i,"");
  var rgxp7 = rgxp6.replace(/leboncoin /i,"");
  var rgxp8 = rgxp7.replace(/la communauté /i,"");
  var rgxp9 = rgxp8.replace(/des images de /i,"");
  
  
  switch(data.val) 
  {
  
  case "google":
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/search.vbs ' + rgxp9;
  exec(process)
  break;
  
  case "411":
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/search411.vbs ' + rgxp9;
  exec(process)
  break;
  
  case "ebay":
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/searchebay.vbs ' + rgxp9;
  exec(process)
  break;
  
  case "youtube":
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/searchyoutube.vbs ' + rgxp9;
  exec(process)
  break;
  
  case "lbc":
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/searchleboncoin.vbs ' + rgxp9;
  exec(process)
  break;
  
  case "com":
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/searchsarah.vbs ' + rgxp9;
  exec(process)
  break;
  case "images":
  var answer = 'Voici les images pour ' + rgxp9 ;
  var process = '%CD%/plugins/websearch/bin/searchimages.vbs ' + rgxp9;
  exec(process)
  break;
  }
	
  callback({'tts' : answer });
}