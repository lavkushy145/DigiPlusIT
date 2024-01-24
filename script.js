let nodeIdCounter = 1;
let selectedNode = null;

function addNode() {
    const nodeName = document.getElementById('nodeName').value;
    const nodeType = document.getElementById('nodeType').value;
    const parentNode = document.getElementById('tree-container');

    if (!nodeName) {
        alert('Please enter a name before adding a node.');
        return;
    }

    const newNode = document.createElement('div');
    newNode.className = 'node';
    newNode.id = `node-${nodeIdCounter++}`;
    newNode.innerHTML = `Name: ${nodeName}<br>Node Type: ${nodeType}<br>Node ID: ${newNode.id}`;
    newNode.addEventListener('click', () => selectNode(newNode));

    // Set position based on mouse click (for simplicity, adjust as needed)
    newNode.style.left = `${Math.random() * 80 + 10}%`;
    newNode.style.top = `${Math.random() * 80 + 10}%`;

    if (nodeType === 'single') {
        parentNode.appendChild(newNode);
    } else if (nodeType === 'child' || nodeType === 'parent') {
        const connector = document.createElement('div');
        connector.className = 'connector';
        parentNode.appendChild(connector);
        parentNode.appendChild(newNode);

        if (nodeType === 'child') {
            connector.style.height = '50px';             // Adjust the connector height as needed
            connector.style.top = '50%';
            connector.style.left = '50%';
        } else if (nodeType === 'parent') {
            newNode.style.top = '60px';                  // Adjust the position of the parent node
            connector.style.height = '50px';             // Adjust the connector height as needed
            connector.style.top = '0';
            connector.style.left = '50%';
        }
    }
}

function selectNode(node) {
    // Clear previous selection
    if (selectedNode) {
        selectedNode.classList.remove('selected');
    }

    // Set new selection
    selectedNode = node;
    selectedNode.classList.add('selected');
}

function updateNode() {
    if (selectedNode) {
        const updateNodeName = document.getElementById('updateNodeName').value;
        if (updateNodeName) {
            selectedNode.innerHTML = `Name: ${updateNodeName}<br>${selectedNode.innerHTML.substring(selectedNode.innerHTML.indexOf('<br>'))}`;
        } else {
            alert('Please enter a new name for the node update.');
        }
    } else {
        alert('Please select a node to update.');
    }
}

function deleteNode() {
    if (selectedNode) {
        selectedNode.remove();
        selectedNode = null;
    } else {
        alert('Please select a node to delete.');
    }
}

function showOptions(nodeId) {
    alert(`Options for Node ${nodeId}`);
}