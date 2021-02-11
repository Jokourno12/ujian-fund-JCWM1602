function showDataUsers(index){
    let getTable = document.getElementById('tableuser')

    let getTbody = document.getElementsByTagName('tbody')[0]

    let tr =''
    for(let i=0; i<dataBase.length; i++){
        if(i == index){
            tr +=`
                <tr>
                    <td>
                        <center>${i+1}</center>
                    </td>
                    <td>
                        <center><input type="text" name="username" value="${dataBase[index].username}" class="inputeditusername"></center>
                    </td>
                    <td>
                        <center><input type="text" name="email" value="${dataBase[index].email}" class="inputemail"></center>
                    </td>
                    <td>
                        <center>role</center>
                    </td>
                    <td>
                        <center>
                            <input type="button" name="buttonsave" value="Save" onClick="">
                            <input type="button" name="buttoncancel" value="Cancle" onClick="">
                        </center>
                    </td>
                </tr>

            `
        }else{
            tr += `
                <tr>
                    <td>
                        <center>${i+1}</center>
                    </td>
                    <td>
                        <center>${dataBase[i].username}</center>
                    </td>
                    <td>
                        <center>${dataBase[i].email}</center>
                    </td>
                    <td>
                        <center> role </center>
                    </td>
                    <td>
                        <input type="button" name="buttonedit" value="Edit" onClick="">
                        <input type="button" name="buttondelete" value="Delete" onClick="">
                    </td>
                </tr>
            `
        }
        getTbody.innerHTML = tr
    }
}

