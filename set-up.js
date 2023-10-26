(function() {
    // Configuration
    const iframeSrc = 'https://cdn.jsdelivr.net/gh/LinaKaryzhska/widget@main/dist/index.html';
    const iframeId = 'my-chat-widget-iframe';
  
    if (document.getElementById(iframeId)) {
      return;
    }
  
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.src = iframeSrc;
    iframe.width = '300';
    iframe.height = '500'; 
    iframe.style.border = 'none';
  
    document.body.appendChild(iframe);
  })();