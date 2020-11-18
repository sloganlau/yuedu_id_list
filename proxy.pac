function FindProxyForURL(url, host) {
   if (shExpMatch(url,"lhnn.zhaotuhao.com/*")) {
     return "PROXY sloganlau.ddns.net:8889";
   }
   return "DIRECT";
}
