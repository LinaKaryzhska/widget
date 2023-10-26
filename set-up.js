(function() {
    // Configuration
    const iframeSrc = 'https://backend.my-domain.com/index.html';
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