const toggle = () =>{
    console.log("This is the first line of the code");
    const input = document.getElementById('input-field').value;
    const Error = document.getElementById('error');
    try {
        // console.log(phhero);
        if(isNaN(input)){
            Error.classList.remove('d-none');
            throw "Please enter valid number";
        }
        else{
            Error.classList.add('d-none');
        }

    } catch (error) {
        document.getElementById('error').innerText =`${error}`;
    }
    finally{
        console.log('inside finally block');
    }


    console.log("This is the last line of the code");
}