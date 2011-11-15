var home = document.getElementById('page-node-home');
var tabsUl = home.getElementsByTagName('ul')[0];

for(var i = 0; i < tabsUl.childNodes.length; i++) {
	var node = tabsUl.childNodes[i];
	if(node.nodeName.toLowerCase() == 'li' && node.className.indexOf('stream-tab-activity') >= 0) {
		rtLi = document.createElement('li');
		rtLi.className = 'stream-tab stream-tab-retweets dropdown-link';
		rtA = document.createElement('a');
		rtA.className = 'tab-text';
		rtA.href = '#';
		rtText = document.createTextNode('Retweets');
		rtI = document.createElement('i');
		rtIText = document.createTextNode('');
		rtI.appendChild(rtIText);
		rtA.appendChild(rtText);
		rtA.appendChild(rtI);
		rtLi.appendChild(rtA);
		tabsUl.insertBefore(rtLi, node);
		break;
	}
}
