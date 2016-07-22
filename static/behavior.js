var text = document.getElementById('text'),
    createItem = document.getElementById('createItem'),
    todo = document.getElementById('todo');

text.addEventListener('keydown', (e) => {
    if(e.keyCode !== 13)
        return;
    
    createItem.click();

});

createItem.addEventListener('click', (e) => {
    var todo = text.value;
    $.post('/todo', { todo : todo })
    .done((data) => {
        domUtil.addItem({ todo : todo })
    })
});

var ready = function(){
    $.get('/todo')
    .done((data) => {
        data.forEach((item) => {
            addItem(item);
        });
    });
}

ready();

var addItem = (item) => {
        var li = document.createElement("li");
        li.innerText = item.todo;
        li.classList.add('pointer');
        li.classList.add(item.done ? 'line-trought' : 'bold');
        li.setAttribute('data-id', item._id);

        li.addEventListener('click', (e) => {
            var classList = e.srcElement.classList;
                    if(classList.contains('line-trought'))
                        classList.remove('line-trought');
                    else
                        classList.add('line-trought');      

            // item.completed = !item.completed;
            // $.ajax({
            //     url : '/todo',
            //     type : 'PUT', 
            //     data : item,
            //     success : (data) => {    
                             
            //     }
            // });
        });
    
        todo.appendChild(li);
        text.value = '';
    }
