document.getElementById('send').onclick = function() {
    let obj = new FormData();
    obj.append('name', document.getElementById("name").value);
    obj.append('email', document.getElementById("email").value);
    obj.append('website', document.getElementById("website").value);
    obj.append('message', document.getElementById("message").value);
    ;document.form.reset();


    let xml = new XMLHttpRequest();
    xml.open('POST',"https://jsonplaceholder.typicode.com/users");
    xml.send(obj);
    xml.onreadystatechange = function() {
        if (xml.readyState === 4 && xml.status === 200) {
            let data = JSON.parse(xml.responseText);
            console.log(data);
        }
    }
};



// const url = 'https://jsonplaceholder.typicode.com/comments';
// let xml = new XMLHttpRequest();
//     xml.open('POST',url);
//     xml.send();
//     xml.onreadystatechange = () => {
//         if(xml.status === 200 &&  xml.readyState === 4){
//             let data = JSON.parse(xml.responseText);
//             console.log(data);
//         }
//     }
//
//     function setData(data) {
//         for(let i=0;i < data.length;i++){
//             console.log(data[i]);
//         }
//     }
