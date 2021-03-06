const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.input');
const checkbox_wrapper = document.querySelectorAll('.checkbox_wrapper')

const validate = {
        firstName: {
        firstName: /^[a-z]+$/i,
        firstNameValue: '',
        errorMess: 'Special Characters and Numbers are not allowed, + @ # . ? / < , > _ - < . * & % ^ % $ # @ : ; / ( ) = { } [ ] /'
    },
    
        lastName: {
        lastName: /^[a-z]+$/i,
        lastNameValue: '',
        errorMess: 'Special Characters and Numbers are not allowed, + @ # . ? / < , > _ - < . * & % ^ % $ # @ : ; / ( ) = { } [ ] /'
    },
    
        schoolName: {
        schoolName: /^[a-z]+$/i,
        schoolNameValue: '',

    },
    
        department:{
        department: /^[a-z]+$/i,
        departmentValue: '',
        errorMess: 'Special Characters and Numbers are not allowed, + @ # . ? / < , > _ - < . * & % ^ % $ # @ : ; / ( ) = { } [ ] /'
    },
    
        followship: {
        followship: /^[a-z]+$/i,
        followshipValue: '',
        errorMess: 'Special Characters and Numbers are not allowed, + @ # . ? / < , > _ - < . * & % ^ % $ # @ : ; / ( ) = { } [ ] /'
    },
        positionOfFollowship: {
        positionOfFollowship: /^[a-z]+$/i,
        positionOfFollowshipValue: '',
        errorMess: 'Special Characters and Numbers are not allowed, + @ # . ? / < , > _ - < . * & % ^ % $ # @ : ; / ( ) = { } [ ] /'
    },
    
        whatsappName: {
        whatsappName: /^[\d]{11}$/i,
        whatsappNumberValue: '',
        errorMess: 'Number most not be more or less than  11 digits'
    },
    
        email: {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        emailValue: '',
        errorMess: 'fill in your valid Email'
    },
    other :{
        other:/^[a-z]+$/i,
        otherValue: '',
        errorMess: 'Special Characters and Numbers are not allowed, + @ # . ? / < , > _ - < . * & % ^ % $ # @ : ; / ( ) = { } [ ] '

    }
    

}

Array.from(checkbox_wrapper).forEach(checkbox =>{

    if(checkbox.querySelector('input').checked){
        let inputValu = checkbox.querySelector('input')
        validate['other'].otherValue = inputValu.value
       
    }
    checkbox.querySelector('input').addEventListener('change', e=>{

        if(e.target.id === 'otherRadio'){
            e.target.parentElement.querySelector('.other').style.borderBottom = '2px solid #e3b45f';
      
      }else {
          validate['other'].otherValue = e.target.value;
         
      }
        
    })
})
document.querySelector('.other').addEventListener('keyup', e=>{
    document.querySelector('#otherRadio').setAttribute('checked', 'true')
       
        let field = e.target.attributes.name.value;
        let result = validate[field][field].test(e.target.value); 
       

        if(result){
            e.target.nextElementSibling.innerHTML = '';
            validate[field]['otherValue']  = e.target.value; 
            e.target.classList.add('borderSuccess');
            e.target.classList.remove('borderDanger');

        }else {
            e.target.nextElementSibling.innerHTML = validate[field].errorMess;
            validate[field]['otherValue']  = ''; 
            e.target.classList.add('borderDanger');
            e.target.classList.remove('borderSuccess');
        }
    
})


inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        let field = e.target.attributes.name.value;
        let result = validate[field][field].test(e.target.value);



        if (result) {
            e.target.nextElementSibling.innerHTML = '';
            e.target.classList.add('borderSuccess');
            e.target.classList.remove('borderDanger');

            validate[field].firstNameValue = e.target.value;
            validate[field].lastNameValue = e.target.value;
            validate[field].schoolNameValue = e.target.value;
            validate[field].departmentValue = e.target.value;
            validate[field].followshipValue = e.target.value;
            validate[field].positionOfFollowshipValue = e.target.value;
            validate[field].whatsappNumberValue = e.target.value;
            validate[field].emailValue = e.target.value;

        } else {

            e.target.nextElementSibling.innerHTML = validate[field].errorMess;
            e.target.classList.add('borderDanger');
            e.target.classList.remove('borderSuccess');

            validate[field].firstNameValue = ''
            validate[field].lastNameValue = ''
            validate[field].schoolNameValue = ''
            validate[field].departmentValue = ''
            validate[field].followshipValue = ''
            validate[field].positionOfFollowshipValue = ''
            validate[field].whatsappNumberValue = '';
        }
    })
})



// Submit to databalse 
form.addEventListener('submit', e => {
    e.preventDefault();
    let inputs = e.target.querySelectorAll('.input');
    

    let lastName = validate['lastName'].lastNameValue;
    let firstName = validate['firstName'].firstNameValue;
    let schoolName = validate['schoolName'].schoolNameValue;
    let department = validate['department'].departmentValue;
    let followship = validate['followship'].followshipValue;
    let positionOfFollowship = validate['positionOfFollowship'].positionOfFollowshipValue;
    let whatsappName = validate['whatsappName'].whatsappNumberValue;
    let email = validate['email'].emailValue;
    let otherValue = validate['other'].otherValue


    Array.from(inputs).forEach(input => {

        if (input.attributes.name.value === 'level') return;

        validate[input.attributes.name.value].firstNameValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].lastNameValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].schoolNameValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].departmentValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].followshipValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].positionOfFollowshipValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].whatsappNumberValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;
        validate[input.attributes.name.value].emailValue === '' ? input.nextElementSibling.innerHTML = 'This is field required' : null;


        if (lastName && firstName && schoolName && department && followship && positionOfFollowship && whatsappName && email && otherValue) {
            console.log('Send to Database');
        }


    })
})