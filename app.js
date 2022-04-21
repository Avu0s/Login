const password = document.querySelector('#pass')
const login = document.querySelector('#login')

const checker = ()=>{
    const range = password.value.length
    if(range < 8){
      alert('Password must be atleast 8 characters')  
    }
    else{
        console.log('Passed')
    }
}

login.addEventListener('click', checker)

