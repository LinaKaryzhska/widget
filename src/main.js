import './styles.css';

import headerHtml from './components/header.html?raw';
import chatBoxHtml from './components/chatBox.html?raw';

document.getElementById('header').innerHTML = headerHtml;
document.getElementById('chatBox').innerHTML = chatBoxHtml;
