const todoNameInput = document.querySelector('.todo-name-input')
const todoMobileInput = document.querySelector('.todo-mobile-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const selectBox = document.querySelector('.type-todo')
const filterOption = document.querySelector('.filter-todo')

todoButton.addEventListener('click', addItem)
todoList.addEventListener('click', deleteItem)
filterOption.addEventListener('change', filterContacts)

function addItem(event) {
    event.preventDefault();
    if (todoNameInput.value.trim() === "" || todoMobileInput.value.trim() === "") {
        alert("لطفاً نام و شماره را وارد کنید!");
        return; 
    }

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    todoDiv.classList.add(selectBox.options[selectBox.selectedIndex].value)

    const newItem = document.createElement('li');
    const nameSpan = document.createElement('span');
    const mobileSpan = document.createElement('span');
    const typeSpan = document.createElement('span');
    
    nameSpan.innerText = todoNameInput.value;
    mobileSpan.innerText = todoMobileInput.value;
    typeSpan.innerText = selectBox.options[selectBox.selectedIndex].innerText;
    
    newItem.appendChild(nameSpan);
    newItem.appendChild(mobileSpan);
    newItem.appendChild(typeSpan);
    newItem.classList.add('todo-item');

    todoDiv.appendChild(newItem);
    todoList.appendChild(todoDiv);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i>-</i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    todoNameInput.value = "";
    todoMobileInput.value = "";
    filterOption.style.display = 'block';
}

function deleteItem(event) {
    const item = event.target;
    if (item.classList.contains('trash-button')) {
        const contact = item.parentElement;
        contact.classList.add('fall');
        setTimeout(() => {
            contact.remove();
        }, 500);
    }
}

function filterContacts(event) {
    const contacts = todoList.childNodes;
    contacts.forEach(function (contact) {
        if (contact.nodeType === 1) { 
            const contactDiv = contact; 
            switch (event.target.value) {
                case "2":
                    contactDiv.style.display = 'flex';
                    break;
                case "1":
                    if (contactDiv.classList.contains('1')) {
                        contactDiv.style.display = 'flex';
                    } else {
                        contactDiv.style.display = 'none';
                    }
                    break;
                case "0":
                    if (contactDiv.classList.contains('0')) {
                        contactDiv.style.display = 'flex';
                    } else {
                        contactDiv.style.display = 'none';
                    }
                    break;
            }
        }
    });
}
