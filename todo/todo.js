//  TÜM ELEMENTLERİ SEÇME İŞLEMİ

const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

//
eventListeners();
function eventListeners(){
    //Tüm eventlistenerleri tek tek yapmamak için fonksiyon yarat
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keypress",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}
//tüm todoları kaldır
function clearAllTodos(e){
    if(confirm("Tümünü Silmek İstediğinize Emin misiniz=?")){
        //todos silme
        // yavaş yöntem kulllanımaz çok ! todoList.innerHTML=""; 
        while(todoList.firstElementChild!=null){
            todoList.removeChild(todoList.firstElementChild);//döngüyle eleman null olana kadar sil yaptık!
        }
        //localstorageden sillme
        localStorage.removeItem("todos");
    }
}
//


//arama todos arama kısmı filtre kısmı
function filterTodos(e){
    //eventin nerede olduğunu bul! clasını bul da diyebiliriz!
    const filterValue=e.target.value.toLowerCase();
    const listItems=document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
            const text=listItem.textContent.toLowerCase();
            if(text.indexOf(filterValue)===-1){
                //bulamazsa murat içinde s yoksa
                listItem.setAttribute("style","display:none !important");//sayfada sil arama anında gözükmesin!
                /*buradaki !important önemli ne olursa olsun bunu yap yani başka class özellikleri senin 
                display bloğunu engelliyorsa önemseme her halükarda bunu yap demektir*/
            }
            else{
                listItem.setAttribute("style","display:block");//sayfada göster
            }
    })
}

//
function deleteTodo(e){
    //tıkladığın elementin clası şuysa yai todoların sağüındaki çarpıya bastıysa
    if(e.target.className==="fa fa-remove"){
        //parentlerde yukarılara çıkıp bütün liyi silme
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);//strogeden sileceiğimiz değerin texti
        showAlert("success","Todo Silme İşlemi Başarılı..");
        //bunları arayüzden sildik Bundan sonra bunları localstrogeden silmek gerekir

    }

}
//bunları arayüzden sildik Bundan sonra bunları localstrogeden silmek gerekir
//localstorageden siliş
function deleteTodoFromStorage(deleteTodo){
    let todos=getTodosFromStorage();//bu fonksiyon bütün todoları almak çağırmaya yarar o yüzden çok kullanırız tanımlama yapmak için
     todos.forEach(function(todo,index){
        if(todo===deleteTodo){
            //Arrayden değer silme ! delete item from array javascript! arama yap
            todos.splice(index,1);//Arrayden değeri silmek böyledi oradaki indexten 1 tane değer sil demektie!=splice()

        }
     })
     localStorage.setItem("todos",JSON.stringify(todos));
}
//

function loadAllTodosToUI(){//bu fonksiyon sayfa yeniden yüklendiğinde dahi kayıtlı içerik yüklensin diyedir
    let todos=getTodosFromStorage();//aşağıdaki ekleme fonksiyonu
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
function addTodo(e){
    const newTodo=todoInput.value.trim();//TRİM baştaki ve sondaki boşluk değerlerini todoya eklemesin diye yaparız gereksiz boşluk silme
    //newTodo boşsa diye kontrol edelim

    /*<div class="alert alert-danger" role="alert">
                        <strong>Oh Snap!</strong>Change!
                    */

    if(newTodo===""){
        showAlert("danger","Lütfen Bir Todo Giriniz!");
    }
    else{
        
        addTodoToUI(newTodo);//arayüze todoyu ekleme 
        //todoları localstorage ye eklemek! googlenin bize verdiği depolama alanı 
        addTodoToStorage(newTodo);
        //

        showAlert("success","Todo Girişi Başarılı");
    }
    
    e.preventDefault();//yapılması en sonda doğrudur formun Default özelliğini önlemek için yaparız!
}
//localstorage!

function getTodosFromStorage(){//strogeden bütün todoları almaya yarar fonksiyonda yapmak güzeldir!
    let todos;
    if(localStorage.getItem("todos")===null){//todos şeklinde key varmı diye kontrol eder
            todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));//Değeri alma Fakat stringden inte gibi arraya çevirmek lasım jsonpars o işe yarar
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos=getTodosFromStorage();//fonksiyonu çağırdık!

    todos.push(newTodo);//todoları ekle
    localStorage.setItem("todos",JSON.stringify(todos));//storagede göster
}
//


//yukarıdaki divi yapıyruz! 

//buradaki amaç eğer giriş varsa yeşil kutu eğer giriş yok hata mesajı gelecekse danger gelmesi için biz ${type} döngüsünü kullanıyoruz!
function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;//buradaki kesme işaretine dikkat et!
    alert.textContent=message;
    firstCardBody.appendChild(alert);
    
    //1 saniye sonra alert mesajı silinsin setTimeout !methodu
    setTimeout(function(){
        alert.remove();
    },1500);
    //1.5 saniye sonra sil her şeyi
   

}
function addTodoToUI(newTodo){//buradaki string değerini list item olarak arayüze uıa ekleyecek!
    /*
    <!-- 
        <li class="list-group-item d-flex justify-content-between">
                            
        Todo 1
            <a href = "#" class ="delete-item">
                <i class = "fa fa-remove"></i>
            </a>

        </li>--> biz bunu şimdi js ile yapacağız'
    */
        //LİSST İTEM OLUŞTURMA
        const listItem=document.createElement("li");
        //LİNK OLUŞTURMA
        const link=document.createElement("a");
        link.href="#";
        link.className="Delete Item";
        link.innerHTML="<i class = 'fa fa-remove'></i>";

        listItem.className="list-group-item d-flex justify-content-between";
        
        //TEXT NODE eklemek

        listItem.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(link);//yukarıdaki görünümü kazandı!

        //todo liste list itemi ekleme
        todoList.appendChild(listItem);
        todoInput.value=" ";
}



